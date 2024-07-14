import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfolio | Diego Chagas - Web Developer',
  description: 'I began my career as a professional developer in March 2016, specializing in web development. Over the years, I have worked on numerous projects, gaining advanced knowledge in front-end development and intermediate expertise in back-end development. My major projects have utilized React and Next.js technologies.',
  metadataBase: new URL('https://diegochagas.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-900 text-base`}>{children}</body>
    </html>
  );
}
