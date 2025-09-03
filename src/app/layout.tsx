import type { Metadata } from 'next';
import { Barlow, Roboto } from 'next/font/google';
import './globals.css';
import { Monitoring } from '@/components/analytics/Monitoring';
import { ProductionLogger } from '@/components/ProductionLogger';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export async function generateMetadata(): Promise<Metadata> {
  // Add cache-busting parameter for social media
  const buildTimestamp = process.env.BUILD_TIMESTAMP || Date.now().toString();
  const ogImageUrl = new URL('/images/og-image.png', 'https://ibenatal.org.br');
  ogImageUrl.searchParams.set('v', buildTimestamp);
  const ogImageUrlString = ogImageUrl.toString();

  return {
    title: {
      default: 'IBE Natal - Igreja Batista da Esperança | Natal, RN',
      template: '%s | IBE Natal',
    },
    description:
      'IBE Natal - Igreja Batista da Esperança em Natal, RN. Família de muitos filhos semelhantes a Jesus. Amar, transformar e multiplicar é o que fazemos.',
    keywords: [
      'IBE Natal',
      'Igreja Batista da Esperança',
      'Igreja Batista Natal',
      'Igreja em Natal RN',
      'Igreja Batista Rio Grande do Norte',
      'IBE Rio Grande do Norte',
      'Igreja Batista da Esperança Natal',
      'igreja batista cidade da esperança',
      'igreja batista potiguar',
      'igreja cristã Natal',
    ],
    authors: [{ name: 'IBE - Igreja Batista da Esperança' }],
    creator: 'IBE - Igreja Batista da Esperança',
    publisher: 'IBE - Igreja Batista da Esperança',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://ibenatal.org.br'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: 'IBE Natal - Igreja Batista da Esperança | Natal, RN',
      description:
        'IBE Natal - Igreja Batista da Esperança em Natal, Rio Grande do Norte. Uma família de muitos filhos semelhantes a Jesus. Amar, transformar e multiplicar é o que fazemos.',
      url: 'https://ibenatal.org.br',
      siteName: 'IBE - Igreja Batista da Esperança',
      locale: 'pt_BR',
      type: 'website',
      images: [
        {
          url: ogImageUrlString,
          width: 1200,
          height: 630,
          alt: 'IBE Natal - Igreja Batista da Esperança',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'IBE Natal - Igreja Batista da Esperança | Natal, RN',
      description:
        'IBE Natal - Igreja Batista da Esperança em Natal, Rio Grande do Norte. Uma família de muitos filhos semelhantes a Jesus.',
      images: [ogImageUrlString],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="light">
      <body
        className={`${roboto.variable} ${barlow.variable} antialiased`}
        suppressHydrationWarning
      >
        <ProductionLogger />
        <Monitoring />
        {children}
      </body>
    </html>
  );
}
