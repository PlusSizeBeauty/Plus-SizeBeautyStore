const APP_SHELL = [
  './',
  './index.html',
  './app.html',
  './beauty.html',
  './hair-care.html',
  './skin-care.html',
  './styles.css',
  './script.js',
  './app.css',
  './app.js',
  './manifest.webmanifest',
  './qr.html',
  './qr.js',
  './PROJECT-GUIDE.md'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('plus-size-beauty-shell').then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((networkResponse) => {
        const cloned = networkResponse.clone();
        caches.open('plus-size-beauty-shell').then((cache) => cache.put(event.request, cloned));
        return networkResponse;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return caches.match('./app.html');
      });
    })
  );
});
