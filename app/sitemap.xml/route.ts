export function GET() {
  const lastModified = new Date('2026-09-09T00:00:00.000Z').toISOString()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://azino777-3casino.vercel.app/</loc><lastmod>${lastModified}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url></urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
