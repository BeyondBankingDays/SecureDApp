
var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

/*
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
  });*/
