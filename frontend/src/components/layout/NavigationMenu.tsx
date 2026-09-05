import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { projectNavItems, legalNavItems } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { useAuth } from '@/context/AuthContext';
import { ShieldCheck, ShieldAlert, LogOut, Key, User, Lock, ArrowRight } from 'lucide-react';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function NavigationMenu({
  isOpen,
  onClose,
  onOpenContact,
}: NavigationMenuProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();

  if (!isOpen) return null;

  // Handle click on protected clinical routes
  const handleProtectedNav = (e: React.MouseEvent, targetHref: string) => {
    e.preventDefault();
    onClose();
    if (isAuthenticated) {
      router.push(targetHref);
    } else {
      router.push(`/login?redirect=${encodeURIComponent(targetHref)}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#121212] text-[#ECE4DA] flex flex-col justify-between p-6 md:p-12 overflow-y-auto animate-fadeIn">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#ECE4DA]/15 pb-6">
        <Link
          href="/"
          onClick={onClose}
          className="text-lg md:text-xl font-serif uppercase tracking-widest text-[#ECE4DA]"
        >
          Normal is Boring
        </Link>
        <button
          onClick={onClose}
          className="flex items-center space-x-2 text-xs uppercase tracking-widest px-4 py-2 border border-[#ECE4DA]/30 rounded-full hover:bg-[#ECE4DA] hover:text-black transition-all cursor-pointer"
          aria-label="Close Menu"
        >
          <span>Close</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Main Navigation Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-12">
        {/* Left Column: Primary Navigation */}
        <div className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6">
          <Link
            href="/"
            onClick={onClose}
            className="text-3xl md:text-5xl lg:text-6xl font-serif hover:text-white/70 transition-colors uppercase"
          >
            01. Home
          </Link>
          <a
            href="/orchestrator-agent?tab=hospital"
            onClick={(e) => handleProtectedNav(e, '/orchestrator-agent?tab=hospital')}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-pink-400 hover:text-pink-300 transition-colors uppercase flex items-center gap-3 cursor-pointer"
          >
            <span>02. Outbreak Map</span>
            <span className="text-xs bg-pink-500 text-white font-sans px-3 py-1 rounded-full font-bold">
              Live GIS
            </span>
            {!isAuthenticated && (
              <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 font-sans px-2 py-0.5 rounded text-[11px] flex items-center gap-1 font-normal">
                <Lock size={10} /> Auth Required
              </span>
            )}
          </a>
          <div className="flex flex-col space-y-2">
            <a
              href="/orchestrator-agent"
              onClick={(e) => handleProtectedNav(e, '/orchestrator-agent')}
              className="text-3xl md:text-5xl lg:text-6xl font-serif hover:text-white/70 transition-colors uppercase flex items-center gap-3 cursor-pointer"
            >
              <span>03. Orchestrator OS</span>
              {!isAuthenticated && (
                <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 font-sans px-2 py-0.5 rounded text-[11px] flex items-center gap-1 font-normal">
                  <Lock size={10} /> Auth Required
                </span>
              )}
            </a>
            {/* Sub-projects list */}
            <div className="pl-6 md:pl-12 flex flex-col space-y-2 pt-2 border-l border-[#ECE4DA]/20">
              {projectNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleProtectedNav(e, item.href)}
                  onMouseEnter={() => setHoveredProject(item.label)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="flex items-center justify-between text-base md:text-xl font-light text-[#ECE4DA]/80 hover:text-white transition-colors cursor-pointer"
                >
                  <span>{item.label}</span>
                  <div className="flex items-center gap-2">
                    {!isAuthenticated && (
                      <Lock size={12} className="text-amber-400/80" />
                    )}
                    {item.badge && (
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#ECE4DA]/30">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <Link
            href="/about-us"
            onClick={onClose}
            className="text-3xl md:text-5xl lg:text-6xl font-serif hover:text-white/70 transition-colors uppercase"
          >
            04. About Us
          </Link>
          <button
            onClick={onOpenContact}
            className="text-left text-3xl md:text-5xl lg:text-6xl font-serif hover:text-white/70 transition-colors uppercase cursor-pointer"
          >
            05. Contact
          </button>
        </div>

        {/* Right Column: Authentication Card & Inquiries */}
        <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#ECE4DA]/15 pt-8 lg:pt-0 lg:pl-12 space-y-8">
          {/* Clinical Authentication & Profile Card */}
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-[#ECE4DA]/20 backdrop-blur-md">
            {isAuthenticated && user ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Authenticated Session
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold border ${
                    user.userPreferences?.enable2FA 
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                      : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  }`}>
                    {user.userPreferences?.enable2FA ? '🛡️ 2FA Active' : '⚠️ 2FA Disabled'}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-serif text-[#ECE4DA] font-semibold">{user.name}</h4>
                  <p className="text-xs text-[#ECE4DA]/60 font-mono mt-0.5">{user.email}</p>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href="/orchestrator-agent?tab=security"
                    onClick={onClose}
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-xs uppercase tracking-widest font-semibold text-[#ECE4DA] transition-all flex items-center justify-center gap-2"
                  >
                    <Key size={14} /> Security & Device Sessions
                  </Link>
                  <button
                    onClick={async () => {
                      await logout();
                      onClose();
                    }}
                    className="w-full py-2 px-4 rounded-xl border border-red-400/30 text-red-400 hover:bg-red-500/10 text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <LogOut size={14} /> Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
                    <Lock size={12} />
                    Clinical Access Portal
                  </span>
                  <h4 className="text-xl font-serif text-[#ECE4DA] mt-1 font-semibold">Protected Healthcare OS</h4>
                  <p className="text-xs text-[#ECE4DA]/70 mt-1 leading-relaxed">
                    Sign in or create a medical provider account to unlock the Orchestrator, multi-agent triage swarm, and outbreak GIS.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/login"
                    onClick={onClose}
                    className="flex-1 text-center py-3 px-4 rounded-xl bg-[#ECE4DA] text-black hover:bg-white text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <span>Sign In</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/signup"
                    onClick={onClose}
                    className="flex-1 text-center py-3 px-4 rounded-xl border border-[#ECE4DA]/40 hover:bg-white/10 text-xs uppercase tracking-widest font-bold text-[#ECE4DA] transition-all flex items-center justify-center"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Contact Inquiries */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#ECE4DA]/60">
              Clinical Inquiries & Network
            </p>
            <div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg md:text-xl font-mono hover:underline block text-[#ECE4DA]"
              >
                {siteConfig.email}
              </a>
              <p className="text-sm text-[#ECE4DA]/70 mt-2">
                {siteConfig.address.street}, {siteConfig.address.city}
                <br />
                {siteConfig.address.province}, {siteConfig.address.country}
              </p>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-xs uppercase tracking-widest text-[#ECE4DA]/60 mb-3">
              Follow Us
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white uppercase tracking-wider border border-[#ECE4DA]/30 px-3 py-1 rounded-full"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#ECE4DA]/15 pt-6 text-xs text-[#ECE4DA]/60">
        <p>© {new Date().getFullYear()} Normal is Boring. All rights reserved.</p>
        <div className="flex space-x-6">
          {legalNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="hover:text-[#ECE4DA] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
