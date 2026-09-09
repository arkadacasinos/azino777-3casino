import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://azino777-3casino.vercel.app'),
  title: 'Azino777 официальный сайт — вход, мобильная версия и обзор казино',
  description: 'Azino777: подробный обзор официального сайта, мобильной версии, регистрации, бонуса, пополнения и вывода средств. Проверяем условия, безопасность и ответы на частые вопросы. 18+.',
  generator: 'v0.app',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    locale: 'ru_RU',
    url: 'https://azino777-3casino.vercel.app',
    siteName: 'Azino777 Review',
    title: 'Azino777 официальный сайт — честный обзор казино',
    description: 'Навигация по официальному сайту, мобильной версии, бонусам и платёжным условиям Azino777.',
  },
  twitter: { card: 'summary', title: 'Azino777 официальный сайт — обзор', description: 'Проверка входа, мобильной версии, бонуса и кассы Azino777.' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0e0d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="theme-color" content="#0b0e0d" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://azino777-3casino.vercel.app" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
