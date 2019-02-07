self.__precacheManifest = [].concat(self.__precacheManifest || [])

workbox.precaching.suppressWarnings()

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener("message", msg => {
  if (msg.data.action == 'skipWaiting') self.skipWaiting()
})

workbox.routing.registerRoute(
  new RegExp('/\img\/icons\/.*\.(png|jpg)/'),
  workbox.strategies.cacheFirst({
    cacheName: 'cache-icons',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
); 