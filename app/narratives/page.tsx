import Layout from '@/components/Layout';
import StoryCard from '@/components/StoryCard';

const warNarratives = [
  {
    title: 'قدرت موشکی ایران',
    description: 'روایت تصویری از یگان‌های موشکی در میدان جنگ ۱۲ روزه.',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=60',
    tag: 'روایت جنگی',
  },
  {
    title: 'حماسه شهیدان آسمانی',
    description: 'جزییات نبرد هوایی و تسلط رزمندگان بر آسمان مقاومت.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60',
    tag: 'روایت جنگی',
  },
  {
    title: 'یگان زرهی در خطوط مقدم',
    description: 'حضور دلاوران زرهی در محورهای نبرد و عملیات زمینی.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
    tag: 'روایت جنگی',
  },
];

export default function WarNarrativesPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-black text-gray-900">روایات جنگی</h1>
          <p className="text-sm text-gray-600">
            روایت‌هایی از قدرت نظامی ایران در برابر جنایات رژیم غاصب صهیونیستی.
          </p>
        </header>

        <div className="space-y-5">
          {warNarratives.map((story) => (
            <StoryCard key={story.title} {...story} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
