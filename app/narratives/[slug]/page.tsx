import Layout from '@/components/Layout';
import data from '@/data/narratives.json';
import { notFound } from 'next/navigation';

export default function NarrativeDetailPage({ params }: { params: { slug: string } }) {
  const item = data.find((s) => s.slug === params.slug);
  if (!item) return notFound();

  return (
    <Layout>
      <article className="space-y-6">
        <header className="text-center space-y-3">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">{item.title}</h1>
          <p className="text-sm text-gray-600">{item.description}</p>
        </header>

        <div className="overflow-hidden rounded-[24px] border bg-white">
          <img src={item.image} alt={item.title} className="w-full h-64 md:h-80 object-cover" />
        </div>

        <section className="prose prose-p:leading-8 max-w-none text-gray-800">
          {item.content.map((p: string, idx: number) => (
            <p key={idx} className="text-base">{p}</p>
          ))}
        </section>
      </article>
    </Layout>
  );
}

export async function generateStaticParams() {
  return data.map((s) => ({ slug: s.slug }));
}
