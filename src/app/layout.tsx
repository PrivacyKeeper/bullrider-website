import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'BullRider.pro - #1 Bull Riding App | Events, Scores & Community',
  description: 'The ultimate bull riding app. Track scores, find events, connect with bull riders, stock contractors, and fans. Live streaming, AI ride analysis, bull database, and marketplace. Join the bull riding community today.',
  keywords: 'bull riding app, bull riding, bull riding events, bull riding scores, bull riding community, rodeo app, PBR, bull rider, stock contractor, bull riding training, rodeo events near me, bull riding live stream, western sports app, bull riding tracker',
  authors: [{ name: 'BullRider.pro' }],
  creator: 'BullRider.pro',
  publisher: 'BullRider.pro',
  metadataBase: new URL('https://www.bullrider.pro'),
  alternates: {
    canonical: 'https://www.bullrider.pro',
  },
  openGraph: {
    title: 'BullRider.pro - #1 Bull Riding App',
    description: 'The ultimate bull riding app. Track scores, find events, connect with bull riders, stock contractors, and fans. Everything bull riding in one place.',
    url: 'https://www.bullrider.pro',
    siteName: 'BullRider.pro',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BullRider.pro - #1 Bull Riding App',
    description: 'The ultimate bull riding app. Track scores, find events, connect with bull riders, stock contractors, and fans.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable + " antialiased"}>
        {children}
      </body>
    </html>
  );
}
