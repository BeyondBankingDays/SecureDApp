angular.module('app.homepageController',[])
    .controller('homepageController', ['$scope','$http','$location',function($scope,$http,$location){
        $scope.user_id =  localStorage.getItem("user_id");
        $scope.username =  localStorage.getItem("username");
    $http.get('https://securedapi1.azurewebsites.net/user/4f432897-6c6c-4e29-a9b8-30c469799354').then(function(response){
        $scope.name = response.data.name;
    })

}]);