
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Simple pass-through fetch; you can add caching later if you want.
self.addEventListener('fetch', () => {});
