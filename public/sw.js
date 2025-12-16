const CACHE_NAME = 'zuugnu-v1';
const RUNTIME_CACHE = 'zuugnu-runtime';

// Install event - skip pre-caching to avoid errors
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Network first for API, cache first for assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Network first strategy for HTML documents
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const cache = caches.open(CACHE_NAME);
          cache.then((c) => c.put(request, response.clone()));
          return response;
        })
        .catch(() => {
          return caches.match(request).then((response) => {
            return response || caches.match('/offline.html');
          });
        })
    );
    return;
  }

  // Cache first strategy for static assets
  if (
    request.method === 'GET' &&
    (request.destination === 'style' ||
      request.destination === 'script' ||
      request.destination === 'image' ||
      request.destination === 'font')
  ) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(request).then((response) => {
          return caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, response.clone());
            return response;
          });
        });
      })
    );
    return;
  }

  // Network first strategy for other requests
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          return caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, response.clone());
            return response;
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});
