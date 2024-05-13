import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '쿠팡',
  description: '쿠파파ㅇ',
  icons: {
    icon: '/coupang.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/coupang.png' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
