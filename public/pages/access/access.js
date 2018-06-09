angular.module('app.accessController',[]).controller('accessController',['$scope','$http', function($scope, $http){

    $scope.selectedFilter = 'request';

    $http.get('https://securedapi1.azurewebsites.net/user/4d5ac00a-64c0-444e-9922-6b1b51aedc6f/documents').then(function(success){
        console.log(success.data);
    }, function(error){
        console.log(error.data);
    });

    $scope.changeSelection = function(selectedOption){
        $scope.selectedFilter = selectedOption;
    }

}]);
