angular.module('app.homepageController',[])
    .controller('homepageController', ['$scope','$http',function($scope,$http){
        $scope.user_id =  localStorage.getItem("user_id");
        $scope.username =  localStorage.getItem("username");
    $http.get('https://webapisecuredbb.azurewebsites.net/user/'+$scope.user_id).then(function(response){
        $scope.name = response.data.name;
    })

}]);