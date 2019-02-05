

workbox.routing.registerRoute(
  /img\/icons\/.*\.(png|jpg)/,
  workbox.strategies.cacheFirst({
    cacheName: 'cache-icons',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
); 