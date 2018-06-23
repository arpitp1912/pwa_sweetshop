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

const STATIC_CACHE = "1.1";

var urlsToCache = [
  '/',
  '/index.html',
  '/resources/style/main.css',
]

 // Getting offline pages

 self.addEventListener ('fetch', (event) => {
   event.respondWith(
     caches.natch(event.request)
     .then((response)=>{
       if (response) {
         return response;
       }
       return fetch(event.request);
     })
   )
 })
