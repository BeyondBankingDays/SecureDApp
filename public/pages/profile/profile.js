angular.module('app.profileController',[])
    .controller('profileController', ['$scope','$http', function($scope, $http){
    $http.get('https://securedapi1.azurewebsites.net/user/4f432897-6c6c-4e29-a9b8-30c469799354').then(function(response){
        $scope.name = response.data.name;
        $scope.dob = response.data.dob;
    })

    $scope.profile = {};
}]);
