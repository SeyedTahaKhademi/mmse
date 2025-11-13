import Layout from '@/components/Layout';
import data from '@/data/nuclear_martyrs.json';
import { notFound } from 'next/navigation';

export default function MartyrBioPage({ params }: { params: { slug: string } }) {
  const martyr = data.find((m) => m.slug === params.slug);
  if (!martyr) return notFound();

  return (
    <Layout>
      <article className="space-y-6">
        <header className="text-center space-y-3">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">{martyr.name}</h1>
          <p className="text-sm text-gray-600">{martyr.shortDescription}</p>
        </header>

        <div className="overflow-hidden rounded-[24px] border bg-white">
          <img src={martyr.image} alt={martyr.name} className="w-full h-64 md:h-80 object-cover" />
        </div>

        <section className="prose prose-p:leading-8 max-w-none text-gray-800">
          {martyr.biography.map((p, idx) => (
            <p key={idx} className="text-base">{p}</p>
          ))}
        </section>
      </article>
    </Layout>
  );
}

export async function generateStaticParams() {
  return data.map((m) => ({ slug: m.slug }));
}
