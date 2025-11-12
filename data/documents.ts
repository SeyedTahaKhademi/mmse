export type DocumentTileSize = 'normal' | 'wide' | 'tall' | 'hero';

export interface DocumentItem {
  slug: string;
  title: string;
  category: string;
  image: string;
  size?: DocumentTileSize;
}

export const documentItems: DocumentItem[] = [
  {
    slug: 'missile-archive',
    title: 'آرشیو نبردهای موشکی',
    category: 'موشکی',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=60',
    size: 'hero',
  },
  {
    slug: 'frontline-gallery',
    title: 'تصاویر خطوط مقدم',
    category: 'گزارش تصویری',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
    size: 'wide',
  },
  {
    slug: 'drone-feed',
    title: 'گزارش پهپادی',
    category: 'پهپاد',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60',
    size: 'normal',
  },
  {
    slug: 'prisoners',
    title: 'پرونده اسرا',
    category: 'روایت خبری',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60',
    size: 'tall',
  },
  {
    slug: 'archive',
    title: 'بانک اسناد مقاومت',
    category: 'سند مکتوب',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60',
    size: 'normal',
  },
  {
    slug: 'audio',
    title: 'کلیپ‌های روایت صوتی',
    category: 'صوتی',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
    size: 'normal',
  },
  {
    slug: 'analysis',
    title: 'تحلیل‌های میدانی',
    category: 'تحلیل',
    image: 'https://images.unsplash.com/photo-1445053023192-8d45cb66099d?auto=format&fit=crop&w=800&q=60',
    size: 'wide',
  },
  {
    slug: 'solidarity',
    title: 'تصاویر همدلی',
    category: 'گزارش اجتماعی',
    image: 'https://images.unsplash.com/photo-1445053023192-8d45cb66099d?auto=format&fit=crop&w=800&q=60',
    size: 'normal',
  },
  {
    slug: 'night-watch',
    title: 'آرشیو شبانه مقاومت',
    category: 'شبانه',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
    size: 'tall',
  },
  {
    slug: 'aid',
    title: 'لحظه‌های امداد',
    category: 'اورژانس',
    image: 'https://images.unsplash.com/photo-1445053023192-8d45cb66099d?auto=format&fit=crop&w=800&q=60',
    size: 'normal',
  },
];
