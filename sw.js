/* ═══════════════════════════════════════════════════════════════════════════
   IBI Skilled Foundations Teacher — service worker (v6.1)

   Strategy
   ────────
   • Navigations (the app shell): NETWORK FIRST; the cached copy is only the
     offline lifeboat. A copy is kept ONLY when the response carries the
     server's `X-IBI-App: teacher` tag — the sign-in page also answers "/"
     with 200 and must never be stored as the app.
   • Same-origin static assets (icons, manifest, fonts CSS): STALE-WHILE-
     REVALIDATE.
   • /api/*, /teacher-photo.*, cross-origin (pdf.js CDN, fonts, AI engines):
     NOT TOUCHED — answers stream, the photo is private, the CDN caches itself.

   ⚠ PRECACHE USES cache:'reload'. A plain cache.addAll() goes through the
   browser's HTTP cache, which happily hands back the PREVIOUS build's files —
   shipping old JS under a new version badge. Always bypass the HTTP cache here.
   ═══════════════════════════════════════════════════════════════════════════ */

const VERSION     = 'v6.1';
const SHELL_CACHE = 'ibiteacher-shell-' + VERSION;
const ASSET_CACHE = 'ibiteacher-assets-' + VERSION;

const PRECACHE = ['/manifest.json', '/icon-192.png', '/icon-512.png', '/favicon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(ASSET_CACHE);
    await Promise.all(PRECACHE.map(async (url) => {
      try {
        const resp = await fetch(new Request(url, { cache: 'reload' }));
        if (resp && resp.ok) await cache.put(url, resp);
      } catch (e) { /* a missing optional asset must not fail the install */ }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('ibiteacher-') && k !== SHELL_CACHE && k !== ASSET_CACHE)
                          .map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;                 // CDN, fonts, engines
  if (url.pathname.startsWith('/api/') || /teacher-photo/.test(url.pathname)) return;

  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const resp = await fetch(req);
        if (resp && resp.ok && resp.headers.get('X-IBI-App') === 'teacher') {
          const cache = await caches.open(SHELL_CACHE);
          cache.put('/', resp.clone());
        }
        return resp;
      } catch (e) {
        const cached = await caches.match('/');
        return cached || new Response('<h1>Offline</h1><p>The teacher server is not reachable right now.</p>',
          { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
      }
    })());
    return;
  }

  // static assets: stale-while-revalidate
  event.respondWith((async () => {
    const cache = await caches.open(ASSET_CACHE);
    const cached = await cache.match(req);
    const network = fetch(req).then(resp => {
      if (resp && resp.ok && resp.type === 'basic') cache.put(req, resp.clone());
      return resp;
    }).catch(() => null);
    return cached || (await network) || new Response('', { status: 504 });
  })());
});
