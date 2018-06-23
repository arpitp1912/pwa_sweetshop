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
