import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import PageTransition from '@/components/PageTransition';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const serif = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Pinnacle Digital Studios — Boutique Web Design & Development',
  description:
    'A boutique digital studio by Mateo & Omar. Designing and engineering exceptional web experiences, interfaces, and systems for ambitious businesses.',
  openGraph: {
    title: 'Pinnacle Digital Studios — Boutique Web Design & Development',
    description:
      'A boutique digital studio by Mateo & Omar. Designing and engineering exceptional web experiences, interfaces, and systems for ambitious businesses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinnacle Digital Studios',
    description:
      'A boutique digital studio by Mateo & Omar. Designing and engineering exceptional web experiences, interfaces, and systems for ambitious businesses.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('pds-theme');
                if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans bg-[#f8f8f6] dark:bg-[#090a0d] text-[#0e0f11] dark:text-[#f5f5f7] antialiased selection:bg-[#c8ff00] selection:text-black min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}


