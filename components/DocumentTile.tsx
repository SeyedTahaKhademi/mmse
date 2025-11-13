import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type TileSize = 'normal' | 'wide' | 'tall' | 'hero';

export interface DocumentTileProps {
  title: string;
  category: string;
  image: string;
  href?: string;
  size?: TileSize;
  priority?: boolean;
}

const sizeClasses: Record<TileSize, string> = {
  normal: 'col-span-1 row-span-1',
  wide: 'col-span-2 row-span-1',
  tall: 'col-span-1 row-span-2',
  hero: 'col-span-2 row-span-2',
};

const DocumentTile: React.FC<DocumentTileProps> = ({
  title,
  category,
  image,
  href,
  size = 'normal',
  priority = false,
}) => {
  const Wrapper = href ? Link : 'div';
  const className = `group relative block overflow-hidden rounded-3xl border border-white/50 bg-white/10 shadow-md shadow-gray-900/5 transition duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl focus-visible:scale-[1.02] ${sizeClasses[size]}`;

  const content = (
    <>
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 20vw, (min-width: 768px) 30vw, 45vw"
          priority={priority}
          unoptimized={typeof image === 'string' && image.startsWith('https://')}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 p-3 text-white">
        <span className="text-xs font-semibold opacity-80">{category}</span>
        <p className="text-sm font-black leading-tight drop-shadow">{title}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Wrapper href={href} className={className} aria-label={title}>
        {content}
      </Wrapper>
    );
  }

  return <div className={className}>{content}</div>;
};

export default DocumentTile;
