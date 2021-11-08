const cacheName = "cache-v1";
const precacheResources = [
  "/",
  "index.html",
  "style.css",
  "AboutUs.html",
  "AboutUs.css",
  "service.html",
  "service.css",
  "weddingDestinationPage.html",
  "weddingDestinationPage.css",
  "weddingDestinationPage.js",
  "contactUs.html",
  "contactUs.css",
  "images/background.jpg",
  "images/banjaran.jpg",
  "images/bayswater.png",
  "images/david.jpg",
  "images/facebook.png",
  "images/header-img.png",
  "images/instagram.png",
  "images/jessie.jpg",
  "images/langkawi.jpeg",
  "images/map-pin.png",
  "images/people.png",
  "images/perhentian.jpg",
  "images/price.png",
  "images/steve.jpg",
  "images/tanjung-rhu.jpg",
  "images/twitter.png",
  "images/user.png",
  "images/Wedding-Background.jpg",
  "images/Wedding-Planning.jpg",
  "images/wedding-ring.png",
  "images/wedding1.jpg",
  "images/wedding2.jpeg",
  "images/wedding3.png",
  "images/phone-solid.svg",
  "fonts/Playball-Regular.ttf",
  "fonts/Teko-Regular.ttf",
];

self.addEventListener("install", (event) => {
  console.log("Service worker install event!");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(precacheResources);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activate event!");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
