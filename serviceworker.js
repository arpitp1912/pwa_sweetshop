if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./serviceworker.js').then(function () {
      console.log("SW Regsitered");
    }, function(err){
      console.log(err);
    })

  })
} else {
  console.log('nope')
}

const STATIC_CACHE = "1.2";

var urlsToCache = [
  '/',
  '/index.html',
  '/resources/style/main.css',
  './offline.html'
]

 // Getting offline pages

 self.addEventListener ('fetch', (event) => {
   event.respondWith(
     caches.match(event.request)
     .then((response)=>{
       if (response) {
         return response;
       }else {
         return fetch(event.request)
         .then((response) => {
           return response
         })
       }
     }).catch((err) => {
       return caches.open(STATIC_CACHE)
       .then(function(cache) {
         return cache.match('/offline.html');
       })
     })
   )
 })
