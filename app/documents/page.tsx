import Layout from '@/components/Layout';
import DocumentTile from '@/components/DocumentTile';
import { documentItems } from '@/data/documents';

const filterTags = ['همه', 'موشکی', 'تحلیل', 'گزارش تصویری', 'همدلی', 'صوتی'];

export default function DocumentsExplorePage() {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-black text-gray-900">مستندات</h1>
          <p className="text-sm text-gray-600">
            چینش کاشی‌وار الهام گرفته از بخش Explore اینستاگرام؛ همه روایت‌ها در یک نگاه.
          </p>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              className={`rounded-full border border-gray-200 px-4 py-1 text-sm font-semibold transition hover:border-gray-400 hover:text-gray-900 ${tag === 'همه' ? 'bg-gray-900 text-white border-gray-900' : 'text-gray-600'}`}
              type="button"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[130px] sm:auto-rows-[150px] lg:auto-rows-[180px] gap-3">
          {documentItems.map((item) => (
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
      </div>
    </Layout>
  );
}
