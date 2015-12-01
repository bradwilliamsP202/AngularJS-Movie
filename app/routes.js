// ROUTES
movieApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/results', {
        templateUrl: 'pages/result.html',
        controller: 'detailController'
    })
    
});