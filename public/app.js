var app = angular.module('securedApp', ['ngRoute', 'angularSpinner', 'app.loginController', 'app.homepageController', 'app.addController',
  'app.accessController', 'app.reportController', 'app.profileController', 'app.footerController', 'app.registrationController']);
angular.module('securedApp.controllers', []);

app.config(function ($routeProvider, usSpinnerConfigProvider) {
  usSpinnerConfigProvider.setDefaults({color: 'white', radius:8, width:2, length: 5});
  $routeProvider
    .when('/', {
      templateUrl: 'pages/login/login.html',
      controller: 'loginController'
    })

    .when('/registration', {
      templateUrl: 'pages/registration/registration.html',
      controller: 'registrationController'
    })

    .when('/add', {
      templateUrl: 'pages/add/add.html',
      controller: 'addController'
    })

    .when('/report', {
      templateUrl: 'pages/report/report.html',
      controller: 'reportController'
    })

    .when('/access', {
      templateUrl: 'pages/access/access.html',
      controller: 'accessController'
    })

    .when('/profile', {
      templateUrl: 'pages/profile/profile.html',
      controller: 'profileController'
    })
    .when('/homepage', {
      templateUrl: 'pages/homepage/homepage.html',
      controller: 'homepageController'
    });
});
