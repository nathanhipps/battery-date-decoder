self.addEventListener('install', event => {
  event.waitUntil(
    caches
    .open('static')
    .then(cache => {
      cache.add('/img/icons/apple-icon-57x57.png')
      cache.add('/img/icons/apple-icon-60x60.png')
      cache.add('/img/icons/apple-icon-72x72.png')
      cache.add('/img/icons/apple-icon-76x76.png')
      cache.add('/img/icons/apple-icon-114x114.png')
      cache.add('/img/icons/apple-icon-120x120.png')
      cache.add('/img/icons/apple-icon-144x144.png')
      cache.add('/img/icons/apple-icon-152x152.png')
      cache.add('/img/icons/apple-icon-180x180.png')
      cache.add('/img/icons/android-icon-192x192.png')
      cache.add('/img/icons/favicon-32x32.png')
      cache.add('/img/icons/favicon-96x96.png')
      cache.add('/img/icons/favicon-16x16.png')

    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        if (response) return response

        return fetch(event.request)
      })
  )
})