var app = angular.module('securedApp',['ngRoute']);
angular.module('securedApp.controllers', []);

app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/homepage/homepage.html',
            controller  : 'homepageController'
        })

        .when('/add',{
            templateUrl : 'pages/add/add.html',
            controller  : 'addController'
        })
        
        .when('/access',{
            templateUrl : 'pages/access/access.html',
            controller  : 'accessController'
        })
        
        .when('/profile',{
            templateUrl : 'pages/profile/profile.html',
            controller  : 'profileController'
        });
  });