"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useI18n } from './i18n';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSettings } from './SettingsContext';

const Header: React.FC = () => {
  const router = useRouter();
  const t = useI18n();
  const pathname = usePathname();
  const { language } = useSettings();
  const isHome = pathname === '/';
  const isRTL = language !== 'en';
  return (
    <header className="fixed top-0 right-0 left-0 z-30 px-4 sm:px-6">
      <div className="glass-panel mx-auto mt-4 sm:mt-6 h-20 max-w-5xl rounded-[28px] border border-white/60 px-4 sm:px-6 shadow-lg grid grid-cols-3 items-center">
        <div className="flex items-center">
          {isHome ? (
            <span className="w-9 h-9" />
          ) : (
            <button onClick={() => router.back()} aria-label={t.back} className="rounded-xl p-2 bg-white/70 border border-white/60">
              {isRTL ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
            </button>
          )}
        </div>

        <div className="flex justify-center">
          <Link href="/" className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            روایت
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-end gap-3 text-sm text-gray-700">
          <span className="px-3 py-1 rounded-full bg-white/70 border border-white/60">
            روایت‌های روز
          </span>
          <span className="px-3 py-1 rounded-full bg-white/50 border border-white/40">
            قهرمانان مقاومت
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
