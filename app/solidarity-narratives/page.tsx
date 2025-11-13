import Layout from '@/components/Layout';
import StoryCard from '@/components/StoryCard';
import data from '@/data/solidarity_narratives.json';

export default function SolidarityNarrativesPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-3 text-center">
          <h1 className="text-3xl font-black text-gray-900">روایات همدلی</h1>
          <p className="text-sm text-gray-600">
            روایت‌هایی از همدلی و مهربانی ملت بزرگ ایران در پناه جنگ ۱۲ روزه.
          </p>
        </header>

        <div className="space-y-5">
          {data.map((story) => (
            <StoryCard
              key={story.slug}
              title={story.title}
              description={story.description}
              image={story.image}
              tag={story.tag}
              href={`/solidarity-narratives/${story.slug}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
