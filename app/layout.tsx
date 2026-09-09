import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from 'next/font/google';
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

const script = Caveat({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
  weight: ['500', '700'],
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
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable} ${script.variable} scroll-smooth`}>
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
      <body className="font-sans bg-[#dde2ea] dark:bg-[#0a0c10] text-[#0a0b0e] dark:text-[#f5f6fa] antialiased selection:bg-[#ff4d26] selection:text-white min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}


