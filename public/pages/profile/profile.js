angular.module('app.profileController',[])
    .controller('profileController', ['$scope','$http','$location','$timeout', function($scope, $http, $location, $timeout){

    $scope.loggedOut = false;

    $http.get('https://webapisecuredbb.azurewebsites.net/user/4f432897-6c6c-4e29-a9b8-30c469799354').then(function(response){
        $scope.name = response.data.name;
        $scope.dob = response.data.dob;
    })

    $scope.profile = {};

    $scope.logOut = function(){
        localStorage.removeItem('user_id');
        $scope.loggedOut = true;
        $timeout( function(){
            $location.path('/');
        }, 2000 );
        
    }
}]);
