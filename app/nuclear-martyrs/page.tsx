import Layout from '@/components/Layout';
import StoryCard from '@/components/StoryCard';

const martyrs = [
  {
    title: 'شهید طهرانی مقدم',
    description: 'شهید',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=60',
    tag: 'شهید',
  },
  {
    title: 'شهید علیمحمدی',
    description: 'شهید',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=60',
    tag: 'شهید',
  },
  {
    title: 'شهید شهریاری',
    description: 'شهید',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=60',
    tag: 'شهید',
  },
  {
    title: 'شهید احمدی روشن',
    description: 'شهید',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=60',
    tag: 'شهید',
  },
  {
    title: 'شهید دکتر فخری‌زاده',
    description: 'شهید',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=60',
    tag: 'شهید',
  },
  {
    title: 'شهید رضایی نژاد',
    description: 'شهید',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=60',
    tag: 'شهید',
  },
];

export default function NuclearMartyrsPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-black text-gray-900">شهدای هسته‌ای</h1>
          <p className="text-sm text-gray-600">
            زندگی‌نامه شهدای هسته‌ای که در دفاع مقدس ۱۲ روزه آسمانی شدند.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {martyrs.map((martyr) => (
            <StoryCard key={martyr.title} {...martyr} variant="compact" />
          ))}
        </div>
      </div>
    </Layout>
  );
}
