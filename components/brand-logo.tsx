import Image from 'next/image';

const artwork = {
  full: { src: '/images/brand/logo-aline-mello.webp', width: 887, height: 556 },
  symbol: { src: '/images/brand/simbolo-aline-mello.webp', width: 380, height: 273 },
  signature: { src: '/images/brand/assinatura-aline-mello.webp', width: 887, height: 236 },
};

type BrandLogoProps = {
  variant?: keyof typeof artwork | 'horizontal';
  tone?: 'brown' | 'gold';
  className?: string;
  decorative?: boolean;
  eager?: boolean;
};

export function BrandLogo({ variant = 'full', tone = 'brown', className = '', decorative = false, eager = false }: BrandLogoProps) {
  const alt = decorative ? '' : 'Dra. Aline Mello — Harmonização Facial';

  if (variant === 'horizontal') {
    return <span className={`brand-logo-horizontal ${className}`} role={decorative ? undefined : 'img'} aria-label={alt || undefined} aria-hidden={decorative || undefined}>
      <BrandLogo variant="symbol" tone={tone} decorative eager={eager} />
      <BrandLogo variant="signature" tone={tone} decorative eager={eager} />
    </span>;
  }

  if (tone === 'brown') {
    const mask = `url("${artwork[variant].src}")`;
    return <span className={`brand-logo brand-logo-brown ${className}`} style={{ maskImage: mask, WebkitMaskImage: mask }} role={decorative ? undefined : 'img'} aria-label={alt || undefined} aria-hidden={decorative || undefined}>
      <Image {...artwork[variant]} alt="" unoptimized loading={eager ? 'eager' : 'lazy'} />
    </span>;
  }

  return <Image {...artwork[variant]} alt={alt} className={`brand-logo ${className}`} unoptimized loading={eager ? 'eager' : 'lazy'} />;
}
