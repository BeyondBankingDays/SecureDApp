angular.module('app.registrationController',[])
    .controller('registrationController',[ '$scope','$http','$location','$timeout', function($scope, $http, $location, $timeout){

        $scope.regObj = {password:'',
    username:'',
last_name:'',
first_name:'',
email:''};
        $scope.reg = 'pending';

        $scope.registerUser = function(){
            console.log($scope.regObj.password);
            $scope.regObj.password=$scope.regObj.password.toString();
            $http.post('https://beyondbanking.openbankproject.com/obp/v2.0.0/users',JSON.stringify($scope.regObj)).then(function(success){
                console.log(success.data);
                $scope.reg = 'success';
                $scope.newUsername = success.data.username;
                $timeout( function(){
                    $location.path('/homepage');
                }, 2000 );
            }, function(error){
                console.log(error.data);
                $scope.reg = 'error';
            })
        }

}]);
