self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('99bet-store').then((cache) => {
    return cache.addAll(['index.html', 'dashboard.html', 'withdraw.html', 'deposit.html']);
  }));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});

