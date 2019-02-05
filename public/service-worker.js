workbox.routing.registerRoute(
  new RegExp('img\/icons\/.*\.(png|jpg)'),
  workbox.strategies.cacheFirst({
    // Use a custom cache name
    cacheName: 'icons-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images
        maxEntries: 40,
        maxAgeSeconds: 7 * 24 * 60 * 60 * 52,
      })
    ],
  })
)

workbox.routing.registerRoute(
  new RegExp('https://fonts.googleapis.com/css?family=Raleway'),
  workbox.strategies.cacheFirst({
    // Use a custom cache name
    cacheName: 'font-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60 * 52,
      })
    ],
  })
)