// src/app/page.tsx (نسخه بازطراحی‌شده)

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import CategoryCard from '@/components/categuryCard';
import DocumentTile from '@/components/DocumentTile';
import { documentItems } from '@/data/documents';
import carouselData from '@/data/carousel.json';

// --- کاروسل تصاویر ---
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    setAutoPlay(false);
  };

  const slide = carouselData[currentSlide];

  return (
    <div 
      className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl group"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* تصویر */}
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover transition-transform duration-500"
      />


      {/* دکمه‌های ناوبری */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition opacity-0 group-hover:opacity-100"
      >
        ❯
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition opacity-0 group-hover:opacity-100"
      >
        ❮
      </button>

      {/* نقاط ناوبری */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2.5 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

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
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Link
                href="/documents?category=موشکی"
                className="rounded-2xl bg-white/20 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/30 backdrop-blur"
              >
                نبردهای موشکی
              </Link>
              <Link
                href="/documents?category=گزارش تصویری"
                className="rounded-2xl bg-white/20 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/30 backdrop-blur"
              >
                گزارش‌های تصویری
              </Link>
              <Link
                href="/documents?category=تحلیل"
                className="rounded-2xl bg-white/20 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/30 backdrop-blur"
              >
                تحلیل‌های میدانی
              </Link>
              <Link
                href="/documents"
                className="rounded-2xl bg-white/20 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/30 backdrop-blur"
              >
                تمام مستندات
              </Link>
            </div>
          </div>

          <Carousel />
        </section>

        {/* ۲. بخش روایات */}
        <section className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="section-title">روایات</h2>
            <span className="text-sm text-gray-500">۳ روایت شاخص در دسترس است</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CategoryCard title="شهدای جنگ" href="/nuclear-martyrs" iconName="شهدای هسته ای" />
            <CategoryCard title="روایات جنگ" href="/narratives" iconName="روایات جنگ" />
            <CategoryCard title="روایات همدلی" href="/solidarity-narratives" iconName="روایات همدلی" />
          </div>
        </section>

        {/* ۳. بخش مستندات */}
        <section className="space-y-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <h2 className="section-title">مستندات و اسناد</h2>
              <p className="text-sm text-gray-600 mt-2">
                مجموعه‌ای جامع از مستندات، تصاویر و تحلیل‌های مرتبط با جنگ ۱۲ روزه. هر سند شامل اطلاعات تفصیلی و شهادت‌های مرتبط است.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">#نبردهای موشکی</span>
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">#گزارش‌های تصویری</span>
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">#تحلیل‌ها</span>
              </div>
            </div>
            <Link
              href="/documents"
              className="whitespace-nowrap rounded-full border border-rose-600 px-5 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
            >
              مشاهده همه
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[120px] sm:auto-rows-[140px] lg:auto-rows-[160px] gap-3">
            {documentItems.slice(0, 8).map((item, index) => (
              <DocumentTile
                key={item.slug}
                title={item.title}
                category={item.category}
                image={item.image}
                size={item.size}
                href={`/documents/${item.slug}`}
                priority={index < 4}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
