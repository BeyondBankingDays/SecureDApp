var app = angular.module('securedApp', ['ngRoute', 'angularSpinner', 'app.loginController', 'app.homepageController', 'app.addController',
  'app.accessController', 'app.reportController', 'app.profileController', 'app.footerController', 'app.registrationController']);
angular.module('securedApp.controllers', []);

app.config(function ($routeProvider, usSpinnerConfigProvider) {
  usSpinnerConfigProvider.setDefaults({color: 'white', radius: 8, width: 2, length: 5});

  let routeList = ['registration', 'add', 'report', 'access', 'profile', 'homepage'];

  $routeProvider
    .when('/', {
      templateUrl: 'pages/login/login.html',
      controller: 'loginController'
    });

  angular.forEach(routeList, function(route){
    $routeProvider
      .when('/' + route, {
        templateUrl: 'pages/'+ route +'/' + route + '.html',
        controller: route + 'Controller'
      });
  });
});

app.constant('DOCUMENTTYPES', [
  'Passport',
  'Driving License',
  'Rental Agreement'
]);
