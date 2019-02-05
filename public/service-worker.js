if (! window.Promise) {
  window.Promise = Promise
}

self.addEventListener('install', e => {
  console.log('Service worker installed')
  e.waitUntil(
    caches.open('static').then(cache => {

    })
  )
})

self.addEventListener('activate', function (e) {
  console.log('Service worker activated')
})

self.addEventListener('fetch', function (e) {
  console.log('[Service Worker] fetching...', e)
  e.respondWith()
})