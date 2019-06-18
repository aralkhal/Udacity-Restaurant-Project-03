
self.addEventListener('install', function(event) {
    // Perform install steps

    var CACHE_NAME = 'my-site-cache-v1';
    var urlsToCache = [
        '/',
        'css/styles.css',
        'js/main.js',
        'img/1.jpg'
    ];

    self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
    });



  });


  self.addEventListener('activate', function(event) {
    event.waitUntil(
      // TODO: remove the old cache
      // caches.delete('wittr-static-v1').then(function(cache){
  
      // })
      console.log('hello')
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  