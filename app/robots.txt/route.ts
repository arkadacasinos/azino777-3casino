export function GET() {
  return new Response('User-agent: *\nAllow: /\nSitemap: https://azino777-3casino.vercel.app/sitemap.xml\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
