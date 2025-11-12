import Layout from '@/components/Layout';
import StoryCard from '@/components/StoryCard';

const empathyStories = [
  {
    title: 'پخش شربت در صف بمپ بنزین',
    description: 'مهربانی مردمی که در روزهای سخت جنگ کنار هم ایستادند.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60',
    tag: 'روایت همدلی',
  },
  {
    title: 'پناه مادران در مناطق جنگی',
    description: 'روایت آرامش و امید در دل کوچه‌های بمباران شده.',
    image: 'https://images.unsplash.com/photo-1445053023192-8d45cb66099d?auto=format&fit=crop&w=800&q=60',
    tag: 'روایت همدلی',
  },
  {
    title: 'پرستاران داوطلب',
    description: 'پرستارانی که در صف مقدم درمان، امید را تزریق کردند.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60',
    tag: 'روایت همدلی',
  },
];

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
          {empathyStories.map((story) => (
            <StoryCard key={story.title} {...story} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
