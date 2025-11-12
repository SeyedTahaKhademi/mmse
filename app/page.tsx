// src/app/page.tsx (نسخه بازطراحی‌شده)

import Link from 'next/link';
import Layout from '@/components/Layout';
import CategoryCard from '@/components/categuryCard';
import DocumentTile from '@/components/DocumentTile';
import { documentItems } from '@/data/documents';

// --- Placeholder برای کاروسل ---
const CarouselPlaceholder = () => (
  // استایل کاروسل: گرادیان زنده با گوشه‌های گرد و افکت بلور
  <div className="relative flex h-44 w-full flex-col items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-rose-500 via-rose-600 to-gray-900 p-5 text-center text-white shadow-2xl sm:h-48 md:h-56">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]"></div>
    
    <p className="z-10 rounded-2xl bg-white/15 px-4 py-2 text-2xl font-bold md:backdrop-blur">
      تصاویر شاخص
    </p>
    
    <div className="absolute bottom-4 flex gap-2 z-10">
      <span className="h-2.5 w-6 rounded-full bg-white"></span>
      <span className="h-2.5 w-2.5 rounded-full bg-white/60"></span>
      <span className="h-2.5 w-2.5 rounded-full bg-white/60"></span>
    </div>
  </div>
);

// --- بخش اصلی صفحه ---
export default function Home() {
  return (
    <Layout>
      <div className="space-y-10">
        {/* قهرمانان صفحه اصلی */}
        <section className="space-y-6">
          <div className="rounded-[28px] bg-gradient-to-br from-rose-500 to-orange-400 p-5 sm:p-6 md:p-8 text-white shadow-2xl space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              روایت تصویری از ایثار ۱۲ روزه
            </h1>
            <p className="text-sm sm:text-base text-white/90">
              دسترسی به مستندات ناب، روایت‌های صوتی و پرونده کامل شهدای مقاومت.
            </p>
            <div className="flex flex-col sm:flex-row w-full gap-3 text-sm font-semibold">
              <button className="w-full sm:w-auto rounded-2xl bg-white/15 px-5 py-3 text-center md:backdrop-blur">
                شروع مرور روایت‌ها
              </button>
              <button className="w-full sm:w-auto rounded-2xl border border-white/60 px-5 py-3 text-white text-center">
                افزودن سند جدید
              </button>
            </div>
            <p className="text-xs text-white/80 sm:text-sm">
              نسخه موبایل با ناوبری سریع و دکمه‌های بزرگ برای استفاده راحت‌تر طراحی شده است.
            </p>
          </div>

          <CarouselPlaceholder />
        </section>

        {/* ۲. بخش روایات */}
        <section className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="section-title">روایات</h2>
            <span className="text-sm text-gray-500">۳ روایت شاخص در دسترس است</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CategoryCard title="شهدای هسته ای" href="/nuclear-martyrs" iconName="شهدای هسته ای" />
            <CategoryCard title="روایات جنگ" href="/narratives" iconName="روایات جنگ" />
            <CategoryCard title="روایات همدلی" href="/solidarity-narratives" iconName="روایات همدلی" />
          </div>
        </section>

        {/* ۳. بخش مستندات */}
        <section className="space-y-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="section-title">مستندات</h2>
              <p className="text-sm text-gray-500">
                الهام گرفته از اکسپلور اینستاگرام؛ کارت‌های پویا و چند ستونه.
              </p>
            </div>
            <Link
              href="/documents"
              className="text-sm font-semibold text-rose-600 hover:text-rose-700"
            >
              مشاهده همه
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[120px] sm:auto-rows-[140px] lg:auto-rows-[160px] gap-3">
            {documentItems.slice(0, 8).map((item) => (
              <DocumentTile
                key={item.slug}
                title={item.title}
                category={item.category}
                image={item.image}
                size={item.size}
                href={`/documents/${item.slug}`}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
