// ===== Critter Quest service worker =====
// Bump CACHE_VERSION whenever app shell files change to force an update.
const CACHE_VERSION = 'critter-quest-v2';
const APP_SHELL = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './manifest.webmanifest',
    './icon.svg',
    './icon-maskable.svg',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
        )).then(() => self.clients.claim())
    );
});

// Network-first for navigations (so updates land), cache-first for assets,
// always falling back to cache when offline.
self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const isNavigation = req.mode === 'navigate';
    if (isNavigation) {
        event.respondWith(
            fetch(req)
                .then((res) => {
                    const copy = res.clone();
                    caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
                    return res;
                })
                .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
        );
        return;
    }

    // Stale-while-revalidate: serve cache instantly, refresh in the background.
    event.respondWith(
        caches.match(req).then((cached) => {
            const network = fetch(req).then((res) => {
                const copy = res.clone();
                caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
                return res;
            }).catch(() => cached);
            return cached || network;
        })
    );
});
