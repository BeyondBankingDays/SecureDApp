var app = angular.module('securedApp',['ngRoute', 'app.homepageController', 'app.addController',
    'app.accessController', 'app.profileController','app.headerController', 'app.footerController','app.registrationController']);
angular.module('securedApp.controllers', []);

app.config(function($routeProvider) {
    $routeProvider
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