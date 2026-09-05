import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import speakeasy from 'speakeasy';
import qrcode from 'qrcode';
import { UAParser } from 'ua-parser-js';

export interface UserPreferences {
  enable2FA: boolean;
  emailNotification: boolean;
  twoFactorSecret?: string;
}

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  salt: string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  userPreferences: UserPreferences;
}

export interface SessionRecord {
  id: string;
  userId: string;
  userAgent: string;
  ipAddress: string;
  createdAt: string;
  expiredAt: string;
}

export interface ParsedSession extends SessionRecord {
  isCurrent?: boolean;
  deviceType: string;
  browser: string;
  os: string;
  formattedDate: string;
}

export interface VerificationRecord {
  id: string;
  userId: string;
  email: string;
  code: string;
  type: 'EMAIL_VERIFICATION' | 'PASSWORD_RESET' | 'MFA_OTP';
  expiresAt: string;
  createdAt: string;
}

// Resilient local persistence storage file path
const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'auth-store.json');

interface AuthStoreData {
  users: Record<string, UserRecord>;
  sessions: Record<string, SessionRecord>;
  verifications: Record<string, VerificationRecord>;
}

// In-memory cache
let storeData: AuthStoreData = {
  users: {},
  sessions: {},
  verifications: {},
};

function ensureDirExists(dir: string) {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  } catch (err) {
    // Ignore error if unable to create directory
  }
}

function loadStore(): AuthStoreData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        storeData = {
          users: parsed.users || {},
          sessions: parsed.sessions || {},
          verifications: parsed.verifications || {},
        };
        return storeData;
      }
    }
  } catch (err) {
    console.warn('[AuthStore] Failed to load local persistent storage:', err);
  }

  // If no file exists, seed initial demo clinical user
  if (Object.keys(storeData.users).length === 0) {
    seedInitialUser();
  }

  return storeData;
}

function persistStore() {
  try {
    ensureDirExists(DATA_DIR);
    fs.writeFileSync(DATA_FILE, JSON.stringify(storeData, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[AuthStore] Failed to write local persistent storage:', err);
  }
}

function hashPassword(password: string, salt?: string): { hash: string; salt: string } {
  const finalSalt = salt || crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, finalSalt, 10000, 64, 'sha512').toString('hex');
  return { hash, salt: finalSalt };
}

function verifyPassword(password: string, hash: string, salt: string): boolean {
  const candidate = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return candidate === hash;
}

function seedInitialUser() {
  const { hash, salt } = hashPassword('Sanjeevni@2026');
  const initialUser: UserRecord = {
    id: 'usr_clinical_mausam',
    name: 'Dr. Mausam Kumar',
    email: 'mausam@sanjeevni.ai',
    passwordHash: hash,
    salt,
    isEmailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    userPreferences: {
      enable2FA: false,
      emailNotification: true,
    },
  };
  storeData.users[initialUser.id] = initialUser;
  persistStore();
}

// Initialize on module load
loadStore();

export const AuthStore = {
  findUserByEmail(email: string): UserRecord | null {
    loadStore();
    const normalized = email.toLowerCase().trim();
    for (const u of Object.values(storeData.users)) {
      if (u.email.toLowerCase() === normalized) {
        return u;
      }
    }
    return null;
  },

  findUserById(id: string): UserRecord | null {
    loadStore();
    return storeData.users[id] || null;
  },

  createUser(name: string, email: string, password: string):UserRecord {
    loadStore();
    const normalized = email.toLowerCase().trim();
    if (this.findUserByEmail(normalized)) {
      throw new Error('User already exists with this email address');
    }

    const { hash, salt } = hashPassword(password);
    const newUser: UserRecord = {
      id: `usr_${crypto.randomBytes(8).toString('hex')}`,
      name: name.trim(),
      email: normalized,
      passwordHash: hash,
      salt,
      isEmailVerified: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userPreferences: {
        enable2FA: false,
        emailNotification: true,
      },
    };

    storeData.users[newUser.id] = newUser;
    persistStore();
    return newUser;
  },

  validateCredentials(email: string, password: string): UserRecord | null {
    const user = this.findUserByEmail(email);
    if (!user) return null;
    const isValid = verifyPassword(password, user.passwordHash, user.salt);
    return isValid ? user : null;
  },

  updateUserPreferences(userId: string, prefs: Partial<UserPreferences>): UserRecord {
    loadStore();
    const user = storeData.users[userId];
    if (!user) throw new Error('User not found');

    user.userPreferences = {
      ...user.userPreferences,
      ...prefs,
    };
    user.updatedAt = new Date().toISOString();
    persistStore();
    return user;
  },

  createSession(userId: string, userAgent: string = '', ipAddress: string = '127.0.0.1'): SessionRecord {
    loadStore();
    const now = new Date();
    const expires = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days

    const session: SessionRecord = {
      id: `sess_${crypto.randomBytes(16).toString('hex')}`,
      userId,
      userAgent: userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Clinical Console/1.0',
      ipAddress: ipAddress || '127.0.0.1',
      createdAt: now.toISOString(),
      expiredAt: expires.toISOString(),
    };

    storeData.sessions[session.id] = session;
    persistStore();
    return session;
  },

  findSessionById(sessionId: string): SessionRecord | null {
    loadStore();
    const sess = storeData.sessions[sessionId];
    if (!sess) return null;

    if (new Date(sess.expiredAt).getTime() <= Date.now()) {
      delete storeData.sessions[sessionId];
      persistStore();
      return null;
    }
    return sess;
  },

  getUserSessions(userId: string, currentSessionId?: string): ParsedSession[] {
    loadStore();
    const now = Date.now();
    const sessions: ParsedSession[] = [];

    for (const sess of Object.values(storeData.sessions)) {
      if (sess.userId === userId) {
        if (new Date(sess.expiredAt).getTime() <= now) {
          delete storeData.sessions[sess.id];
          continue;
        }

        const parser = new UAParser(sess.userAgent);
        const res = parser.getResult();
        const deviceType = res.device.type === 'mobile' ? 'Mobile Phone' : res.device.type === 'tablet' ? 'Tablet' : 'Desktop / Laptop';
        const browser = res.browser.name ? `${res.browser.name} ${res.browser.major || ''}`.trim() : 'Modern Web Browser';
        const os = res.os.name ? `${res.os.name} ${res.os.version || ''}`.trim() : 'Operating System';

        const createdDate = new Date(sess.createdAt);
        const formattedDate = createdDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });

        sessions.push({
          ...sess,
          isCurrent: sess.id === currentSessionId,
          deviceType,
          browser,
          os,
          formattedDate,
        });
      }
    }

    persistStore();

    // Sort by latest created first
    return sessions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  deleteSession(sessionId: string, userId: string): boolean {
    loadStore();
    const sess = storeData.sessions[sessionId];
    if (sess && sess.userId === userId) {
      delete storeData.sessions[sessionId];
      persistStore();
      return true;
    }
    return false;
  },

  deleteAllOtherSessions(userId: string, currentSessionId: string): number {
    loadStore();
    let count = 0;
    for (const [id, sess] of Object.entries(storeData.sessions)) {
      if (sess.userId === userId && id !== currentSessionId) {
        delete storeData.sessions[id];
        count++;
      }
    }
    persistStore();
    return count;
  },

  // TOTP Two-Factor Authentication
  async generateMFASetup(user: UserRecord): Promise<{ secret: string; qrImageUrl: string }> {
    let secretKey = user.userPreferences.twoFactorSecret;
    if (!secretKey) {
      const secret = speakeasy.generateSecret({
        name: `SanjeevniOS (${user.email})`,
        issuer: 'Sanjeevni-OS',
        length: 20,
      });
      secretKey = secret.base32;
      this.updateUserPreferences(user.id, { twoFactorSecret: secretKey });
    }

    const otpauthUrl = speakeasy.otpauthURL({
      secret: secretKey,
      label: encodeURIComponent(`SanjeevniOS:${user.email}`),
      issuer: 'Sanjeevni-OS',
      encoding: 'base32',
    });

    const qrImageUrl = await qrcode.toDataURL(otpauthUrl);
    return {
      secret: secretKey,
      qrImageUrl,
    };
  },

  verifyTOTP(secretKey: string, token: string): boolean {
    if (!secretKey || !token) return false;
    // Allow window of 1 step (30s drift either side)
    return speakeasy.totp.verify({
      secret: secretKey,
      encoding: 'base32',
      token: token.trim(),
      window: 1,
    });
  },

  // Verification & Real-Time Auth Codes
  createVerificationCode(
    userId: string,
    email: string,
    type: 'EMAIL_VERIFICATION' | 'PASSWORD_RESET' | 'MFA_OTP',
    expiresInMinutes = 45
  ): VerificationRecord {
    loadStore();
    const id = crypto.randomUUID();
    // 6-digit numeric verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const record: VerificationRecord = {
      id,
      userId,
      email: email.toLowerCase().trim(),
      code,
      type,
      expiresAt: new Date(Date.now() + expiresInMinutes * 60 * 1000).toISOString(),
      createdAt: new Date().toISOString(),
    };
    storeData.verifications[id] = record;
    persistStore();
    return record;
  },

  verifyEmailCode(codeOrId: string, email?: string): { success: boolean; user?: UserRecord; error?: string } {
    loadStore();
    const cleanCode = codeOrId.trim();
    const cleanEmail = email?.toLowerCase().trim();

    // Find matching verification record
    let foundRecord: VerificationRecord | null = null;
    let foundId: string | null = null;

    for (const [id, rec] of Object.entries(storeData.verifications)) {
      if (rec.type === 'EMAIL_VERIFICATION') {
        if (rec.code === cleanCode || rec.id === cleanCode) {
          if (!cleanEmail || rec.email === cleanEmail) {
            foundRecord = rec;
            foundId = id;
            break;
          }
        }
      }
    }

    if (!foundRecord || !foundId) {
      return { success: false, error: 'Invalid or expired confirmation code' };
    }

    if (new Date(foundRecord.expiresAt).getTime() < Date.now()) {
      delete storeData.verifications[foundId];
      persistStore();
      return { success: false, error: 'Confirmation code has expired. Please request a new one.' };
    }

    const user = storeData.users[foundRecord.userId];
    if (!user) {
      return { success: false, error: 'Associated user account not found' };
    }

    // Mark email as verified
    user.isEmailVerified = true;
    user.updatedAt = new Date().toISOString();
    delete storeData.verifications[foundId];
    persistStore();

    return { success: true, user };
  },

  resetPasswordWithCode(codeOrId: string, newPassword: string): { success: boolean; user?: UserRecord; error?: string } {
    loadStore();
    const cleanCode = codeOrId.trim();

    let foundRecord: VerificationRecord | null = null;
    let foundId: string | null = null;

    for (const [id, rec] of Object.entries(storeData.verifications)) {
      if (rec.type === 'PASSWORD_RESET') {
        if (rec.code === cleanCode || rec.id === cleanCode) {
          foundRecord = rec;
          foundId = id;
          break;
        }
      }
    }

    if (!foundRecord || !foundId) {
      return { success: false, error: 'Invalid or expired password reset code' };
    }

    if (new Date(foundRecord.expiresAt).getTime() < Date.now()) {
      delete storeData.verifications[foundId];
      persistStore();
      return { success: false, error: 'Password reset code has expired. Please request a new one.' };
    }

    const user = storeData.users[foundRecord.userId];
    if (!user) {
      return { success: false, error: 'User account not found' };
    }

    // Update password with fresh salt and hash
    const { hash, salt } = hashPassword(newPassword);
    user.passwordHash = hash;
    user.salt = salt;
    user.updatedAt = new Date().toISOString();

    // Revoke all existing sessions for security
    for (const [sId, sess] of Object.entries(storeData.sessions)) {
      if (sess.userId === user.id) {
        delete storeData.sessions[sId];
      }
    }

    delete storeData.verifications[foundId];
    persistStore();

    return { success: true, user };
  },

  sanitizeUser(user: UserRecord) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      isEmailVerified: user.isEmailVerified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      userPreferences: {
        enable2FA: user.userPreferences.enable2FA,
        emailNotification: user.userPreferences.emailNotification,
      },
    };
  },
};

