'use client';

import React, { useEffect, useRef, useState } from 'react';
import Layout from '@/components/Layout';
import { useSettings } from '@/components/SettingsContext';
import { useI18n } from '@/components/i18n';
import Image from 'next/image';

export default function ProfilePage() {
  const { profile, setProfile } = useSettings();
  const t = useI18n();
  const fileRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const onAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setProfile({ avatar: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="section-title">{t.editProfile}</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border bg-white">
              {mounted && profile.avatar ? (
                <div className="relative h-full w-full">
                  <Image
                    src={profile.avatar}
                    alt={t.avatar}
                    fill
                    className="object-cover"
                    sizes="64px"
                    unoptimized={profile.avatar.startsWith('data:')}
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">{t.avatar}</div>
              )}
            </div>
            <div>
              <input type="file" accept="image/*" ref={fileRef} onChange={onAvatarChange} className="hidden" />
              <button type="button" onClick={() => fileRef.current?.click()} className="rounded-xl px-3 py-2 border bg-white/70">{t.avatar}</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="mb-1 text-sm">{t.name}</span>
              <input value={profile.name} onChange={(e)=>setProfile({ name: e.target.value })} className="rounded-xl border px-3 py-2 bg-white/70" required />
            </label>
            <label className="flex flex-col">
              <span className="mb-1 text-sm">{t.mobile}</span>
              <input value={profile.mobile} onChange={(e)=>setProfile({ mobile: e.target.value })} className="rounded-xl border px-3 py-2 bg-white/70" inputMode="tel" pattern="^[0-9+\-()\s]{7,}$" required />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="mb-1 text-sm">{t.bio}</span>
            <textarea value={profile.bio || ''} onChange={(e)=>setProfile({ bio: e.target.value })} className="rounded-xl border px-3 py-2 bg-white/70 min-h-[100px]" />
          </label>

          <div>
            <button type="submit" className="rounded-xl px-4 py-2 border bg-white/70 font-semibold">{t.save}</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
