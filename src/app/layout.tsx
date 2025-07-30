import type { Metadata } from 'next';
import { Barlow, Roboto } from 'next/font/google';
import './globals.css';
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

export const metadata: Metadata = {
  title: 'IBE - Igreja Batista da Esperança',
  description:
    'Somos a Igreja Batista da Esperança. Ser uma família de muitos filhos semelhantes a Jesus é o que queremos ser. Amar, transformar e multiplicar é o que fazemos. Somos guiados por princípios bíblicos: Oração, evangelização discipuladora, plantação de igrejas, formação de líderes, compaixão e graça. Nosso estilo devida nos faz viver a alegria da vitória de cristo, nos relacionando e crescendo com base no amor que Deus colocou em nossos corações, sempre alicerçados na pessoa de Jesus.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body
        className={`${roboto.variable} ${barlow.variable} antialiased`}
        suppressHydrationWarning
      >
        <ProductionLogger />
        {children}
      </body>
    </html>
  );
}
