/* Routes*/
//Angular routes allow us to map URLs to use templates so that every time the current route changes,
//the included view changes with it

/* $routeProvider*/
//$routeProvider allows you to specify Routes

//It is a good practice to re-declare your application module in every new file
angular.module('advancedTopicsApp').config(function ($routeProvider) {

  //Inside module.config, we can use one of $routeProvider's methods to define routes

  /* .when (path, route)*/
  //Adds a new route definition to the $route service

  /* .otherwise (params)*/
  //Sets route definition that will be used on route change when no other route definition is matched

  //You only need to define $routeProvider once and use method chaining
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

});