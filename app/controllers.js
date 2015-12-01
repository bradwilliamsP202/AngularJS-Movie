// CONTROLLERS
movieApp.controller('homeController', ['$scope', 'movieService', function($scope, movieService) {
    
    $scope.movie = movieService.movie;
    
    $scope.$watch('movie', function() {
       movieService.movie = $scope.movie; 
    });
    
}]);

movieApp.controller('detailController', ['$scope', '$resource', '$routeParams', 'movieService', function($scope, $resource, $routeParams, movieService) {
    
    $scope.movie = movieService.movie;
    
    $scope.movieAPI = $resource("http://www.omdbapi.com/?t=:q&plot=full&tomatoes=true", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.movieResult = $scope.movieAPI.get({ q: $scope.movie });
    
}]);