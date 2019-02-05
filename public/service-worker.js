self.addEventListener('install', e => {
  e.waitUntil(
    caches
      .open('static')
      .then(cache => {
        cache.add('/img/icons/android-icon-36x36.png')
        cache.add('/img/icons/android-icon-48x48.png')
        cache.add('/img/icons/android-icon-72x72.png')
        cache.add('/img/icons/android-icon-96x96.png')
        cache.add('/img/icons/android-icon-144x144.png')
        cache.add('/img/icons/android-icon-192x192.png')
        cache.add('/img/icons/apple-icon-57x57.png')
        cache.add('/img/icons/apple-icon-60x60.png')
        cache.add('/img/icons/apple-icon-72x72.png')
        cache.add('/img/icons/apple-icon-76x76.png')
        cache.add('/img/icons/apple-icon-114x114.png')
        cache.add('/img/icons/apple-icon-120x120.png')
        cache.add('/img/icons/apple-icon-144x144.png')
        cache.add('/img/icons/apple-icon-152x152.png')
        cache.add('/img/icons/apple-icon-180x180.png')
        cache.add('/img/icons/apple-icon-precomposed.png')
        cache.add('/img/icons/apple-icon.png')
        cache.add('/img/icons/favicon-16x16.png')
        cache.add('/img/icons/favicon-36x36.png')
        cache.add('/img/icons/favicon-96x96.png')
        cache.add('https://fonts.googleapis.com/css?family=Raleway')
      }))
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches
      .match(e.request)
      .then(response => {
        if (response) {
          return response
        } else {
          return fetch(e.request)
        }
      })
      .catch(error => console.log(error))
  )
})