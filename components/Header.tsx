// src/components/Header.tsx (نسخه بازطراحی‌شده)

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-30 px-4 sm:px-6">
      <div className="glass-panel mx-auto mt-4 sm:mt-6 h-20 max-w-5xl rounded-[28px] border border-white/60 px-4 sm:px-6 shadow-lg flex items-center justify-center md:justify-between gap-4">
        <Link href="/" className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight text-center">
          روایات
        </Link>

        <div className="hidden md:flex items-center gap-3 text-sm text-gray-700">
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
