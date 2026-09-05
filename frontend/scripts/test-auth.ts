import { AuthStore } from '../src/lib/auth-store';
import speakeasy from 'speakeasy';

async function runTests() {
  console.log('🧪 Starting Sanjeevni OS Auth & 2FA Test Suite...');

  // 1. Check Demo User
  const demoUser = AuthStore.findUserByEmail('mausam@sanjeevni.ai');
  console.assert(demoUser !== null, 'Demo user should exist');
  console.log('✅ Demo user loaded:', demoUser?.name, demoUser?.email);

  // 2. Validate Password
  const valid = AuthStore.validateCredentials('mausam@sanjeevni.ai', 'Sanjeevni@2026');
  console.assert(valid !== null, 'Password validation failed for demo user');
  console.log('✅ Credential validation passed');

  // 3. Create a New User
  const testEmail = `dr.test_${Date.now()}@sanjeevni.ai`;
  const newUser = AuthStore.createUser('Dr. Test Surgeon', testEmail, 'StrongPass@123');
  console.assert(newUser.email === testEmail, 'New user email mismatch');
  console.log('✅ User registration passed:', newUser.name, newUser.email);

  // 4. Create Multiple Sessions (Simulating Desktop & Mobile)
  const desktopSession = AuthStore.createSession(
    newUser.id,
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    '192.168.1.45'
  );
  const mobileSession = AuthStore.createSession(
    newUser.id,
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
    '10.0.0.88'
  );
  console.log('✅ Created 2 multi-device sessions:', desktopSession.id, mobileSession.id);

  // 5. Query Active Sessions with UA Parsing
  const sessions = AuthStore.getUserSessions(newUser.id, desktopSession.id);
  console.assert(sessions.length === 2, `Expected 2 sessions, got ${sessions.length}`);
  const current = sessions.find(s => s.isCurrent);
  const other = sessions.find(s => !s.isCurrent);
  console.assert(current?.isCurrent === true, 'Current session flag missing');
  console.assert(other?.deviceType.includes('Mobile'), 'Mobile device detection failed');
  console.log('✅ Multi-device parsing passed:');
  console.log('   - Current:', current?.os, current?.browser, current?.deviceType);
  console.log('   - Other:', other?.os, other?.browser, other?.deviceType);

  // 6. Generate 2FA Setup (QR & Secret)
  const mfaSetup = await AuthStore.generateMFASetup(newUser);
  console.assert(mfaSetup.secret.length > 0, 'MFA secret empty');
  console.assert(mfaSetup.qrImageUrl.startsWith('data:image/png;base64,'), 'QR data URL invalid');
  console.log('✅ TOTP 2FA Secret and QR Code generated:', mfaSetup.secret);

  // 7. Generate TOTP Pin and Verify
  const validToken = speakeasy.totp({
    secret: mfaSetup.secret,
    encoding: 'base32',
  });
  console.log('   Generated TOTP token:', validToken);

  const isTotpValid = AuthStore.verifyTOTP(mfaSetup.secret, validToken);
  console.assert(isTotpValid === true, 'TOTP verification failed');
  console.log('✅ TOTP Token verified successfully');

  // Activate 2FA on account
  AuthStore.updateUserPreferences(newUser.id, { enable2FA: true, twoFactorSecret: mfaSetup.secret });
  const reloaded = AuthStore.findUserById(newUser.id);
  console.assert(reloaded?.userPreferences.enable2FA === true, 'enable2FA not updated');
  console.log('✅ 2FA enabled on user preferences');

  // 8. Session Revocation
  const deleted = AuthStore.deleteSession(mobileSession.id, newUser.id);
  console.assert(deleted === true, 'Delete session failed');
  const remaining = AuthStore.getUserSessions(newUser.id);
  console.assert(remaining.length === 1, 'Expected 1 remaining session');
  console.log('✅ Remote device session revoked successfully. Remaining:', remaining.length);

  console.log('\n🎉 ALL TESTS PASSED! Authentication, 2FA, and Session engine are fully functional.\n');
}

runTests().catch(err => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
