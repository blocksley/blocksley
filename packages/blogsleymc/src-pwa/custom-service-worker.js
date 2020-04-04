/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

 /*
 * Ignore this file for now.  GenerateSW is way easier!
 */

self.addEventListener('install', function(event) {
  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting()

  // Perform any other actions required for your
  // service worker to install, potentially inside
  // of event.waitUntil();
})

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim())
})

self.addEventListener('fetch', (event) => {
  // console.log('fetch')
  // console.log(event)

  const pattern = /.*\/storage\/.*/
  if (event.request.url.match(pattern)) {
    // console.log('match')
    event.respondWith(async function () {
      const cache = await caches.open('storage-images')
      const cachedResponse = await cache.match(event.request.url)
      // console.log(cachedResponse)
      return cachedResponse
    }())
  }
})
