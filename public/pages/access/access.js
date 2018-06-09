angular.module('app.accessController',[]).controller('accessController',['$scope','$http', function($scope, $http){

    $scope.selectedFilter = 'request';
    var providerId =  localStorage.getItem("user_id");
    $http.get('https://webapisecuredbb.azurewebsites.net.net/user/'+providerId+'/documents').then(function(success){
        console.log(success.data);
    }, function(error){
        console.log(error.data);
    });

    $scope.changeSelection = function(selectedOption){
        $scope.selectedFilter = selectedOption;
    }

}]);
