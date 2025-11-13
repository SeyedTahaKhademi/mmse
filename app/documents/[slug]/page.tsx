import Layout from '@/components/Layout';
import data from '@/data/documents.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface DocumentDetailPageProps {
  params: { slug: string };
}

export default function DocumentDetailPage({ params }: DocumentDetailPageProps) {
  const item = data.find((doc) => doc.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <Layout>
      <article className="space-y-8">
        <header className="space-y-3 text-center">
          <span className="text-xs font-semibold text-rose-600">{item.category}</span>
          <h1 className="text-3xl font-black text-gray-900">{item.title}</h1>
          <p className="text-sm text-gray-600">
            این صفحه نمونه‌ای از روایت‌های آرشیوی است. می‌توانید متن کامل، تصاویر و ویدیوهای مرتبط را در این قالب نمایش دهید.
          </p>
        </header>

        <div className="overflow-hidden rounded-[32px] border border-white/50 shadow-xl">
          <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
        </div>

        <section className="space-y-4 text-gray-700">
          <p>
            در این بخش می‌توانید توضیحات بلند، اسناد متنی، و روایت‌های شفاهی مرتبط با «{item.title}» را قرار دهید. ساختار
            صفحه به‌صورت موبایل‌محور طراحی شده تا کاربر تنها با اسکرول، محتوا را دنبال کند.
          </p>
          <p>
            همچنین امکان افزودن گالری عکس، کلیپ‌های ویدیویی و فایل‌های صوتی وجود دارد. برای هر سند می‌توانید زیرعنوان، تاریخ،
            منبع و برچسب‌های مربوطه را درج کنید تا در آینده امکان فیلتر و جست‌وجو فراهم شود.
          </p>
        </section>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-500">
          <span className="rounded-full bg-gray-100 px-3 py-1">#مستندات</span>
          <span className="rounded-full bg-gray-100 px-3 py-1">#{item.category}</span>
          <span className="rounded-full bg-gray-100 px-3 py-1">#۱۲روز_مقاومت</span>
        </div>

        <div className="text-center">
          <Link
            href="/documents"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 hover:border-gray-400"
          >
            بازگشت به مستندات
          </Link>
        </div>
      </article>
    </Layout>
  );
}
