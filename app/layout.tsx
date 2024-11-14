import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Linkroom - Your Beautiful Link in Bio Page',
  description: 'Create a stunning, customizable link in bio page for all your important links.',
  openGraph: {
    title: 'Linkroom - Your Beautiful Link in Bio Page',
    description: 'Create a stunning, customizable link in bio page for all your important links.',
    url: 'https://linkroom.com',
    siteName: 'Linkroom',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Linkroom Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linkroom - Your Beautiful Link in Bio Page',
    description: 'Create a stunning, customizable link in bio page for all your important links.',
    images: ['https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
