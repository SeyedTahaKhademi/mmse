'use client';

import React from 'react';
import Layout from '@/components/Layout';
import { useSettings } from '@/components/SettingsContext';
import { useI18n } from '@/components/i18n';
import Link from 'next/link';

export default function SettingsPage() {
  const { theme, setTheme, fontSize, setFontSize, language, setLanguage } = useSettings();
  const t = useI18n();

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="section-title">{t.settings}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-4 bg-white/70">
            <h2 className="font-bold mb-3">{t.theme}</h2>
            <div className="flex gap-3">
              <button onClick={() => setTheme('light')} className={`px-3 py-2 rounded-xl border ${theme==='light'?'bg-rose-100 border-rose-400':'bg-white/70'}`}>{t.light}</button>
              <button onClick={() => setTheme('dark')} className={`px-3 py-2 rounded-xl border ${theme==='dark'?'bg-rose-100 border-rose-400':'bg-white/70'}`}>{t.dark}</button>
              <button onClick={() => setTheme('system')} className={`px-3 py-2 rounded-xl border ${theme==='system'?'bg-rose-100 border-rose-400':'bg-white/70'}`}>{t.system}</button>
            </div>
          </div>

          <div className="rounded-2xl border p-4 bg-white/70">
            <h2 className="font-bold mb-3">{t.fontSize}</h2>
            <div className="flex gap-3">
              <button onClick={() => setFontSize('sm')} className={`px-3 py-2 rounded-xl border ${fontSize==='sm'?'bg-rose-100 border-rose-400':'bg-white/70'}`}>{t.small}</button>
              <button onClick={() => setFontSize('md')} className={`px-3 py-2 rounded-xl border ${fontSize==='md'?'bg-rose-100 border-rose-400':'bg-white/70'}`}>{t.medium}</button>
              <button onClick={() => setFontSize('lg')} className={`px-3 py-2 rounded-xl border ${fontSize==='lg'?'bg-rose-100 border-rose-400':'bg-white/70'}`}>{t.large}</button>
            </div>
          </div>

          <div className="rounded-2xl border p-4 bg-white/70">
            <h2 className="font-bold mb-3">{t.language}</h2>
            <div className="flex gap-3">
              <button onClick={() => setLanguage('fa')} className={`px-3 py-2 rounded-xl border ${language==='fa'?'bg-rose-100 border-rose-400':'bg-white/70'}`}>{t.persian}</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-2 rounded-xl border ${language==='en'?'bg-rose-100 border-rose-400':'bg-white/70'}`}>{t.english}</button>
              <button onClick={() => setLanguage('ar')} className={`px-3 py-2 rounded-xl border ${language==='ar'?'bg-rose-100 border-rose-400':'bg-white/70'}`}>{t.arabic}</button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link href="/profile" className="rounded-xl px-4 py-2 border bg-white/70 font-semibold">{t.profile}</Link>
        </div>
      </div>
    </Layout>
  );
}
