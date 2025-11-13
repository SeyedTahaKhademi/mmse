import Layout from '@/components/Layout';
import StoryCard from '@/components/StoryCard';
import data from '@/data/nuclear_martyrs.json';

export default function NuclearMartyrsPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-black text-gray-900">شهدای جنگ 12 روزه</h1>
          <p className="text-sm text-gray-600">
            زندگی‌نامه شهدای معروف که در دفاع مقدس ۱۲ روزه آسمانی شدند.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {data.map((m) => (
            <StoryCard
              key={m.slug}
              title={m.name}
              description={m.shortDescription}
              image={m.image}
              tag={'شهید'}
              href={`/nuclear-martyrs/${m.slug}`}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
