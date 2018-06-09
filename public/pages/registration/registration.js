angular.module('app.registrationController', [])
    .controller('registrationController', ['$scope', '$http',
        '$location', '$timeout', '$window', function ($scope, $http, $location, $timeout, $window) {

            var isLoggedIn = localStorage.getItem('user_id');
            if (isLoggedIn) {
                $location.path('/homepage').search({user_id: isLoggedIn});
            }

            $scope.loginObj = {};

            $scope.regObj = {
                password: '',
                username: '',
                last_name: '',
                first_name: '',
                email: ''
            };
            $window.userObject = {};
            $scope.reg = 'pending';

            $scope.registerUser = function () {
                $scope.regObj.password = $scope.regObj.password.toString();
                $http.post('https://beyondbanking.openbankproject.com/obp/v2.0.0/users', JSON.stringify($scope.regObj)).then(function (success) {
                    console.log(success.data);
                    $scope.reg = 'success';
                    localStorage.setItem("user_id", success.data.user_id);
                    localStorage.setItem("username", success.data.provider_id);
                    $timeout(function () {
                        $location.path('/homepage').search({user_id: success.data.user_id});
                    }, 1000);
                }, function (error) {
                    console.log(error.data);
                    $scope.reg = 'error';
                })
            }

            $scope.login = function () {

                var config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'DirectLogin username=\"' + $scope.loginObj.username + '\",password=\"' + $scope.loginObj.password + '\",consumer_key="ukj43wr0oc5ivqlvmbbawvyzkp0vo1vx3fcyal1n"'
                    }
                }

                var data = {};


                $http.post('https://beyondbanking.openbankproject.com/my/logins/direct', data, config)
                    .then(function (response) {
                        var configGet = {
                            headers : {'Content-Type': 'application/json',
                                'Authorization' : 'DirectLogin token=\"' + response.data.token + '\"'
                            }}

                        $http.get('https://beyondbanking.openbankproject.com/obp/v3.0.0/users/current', configGet).then(
                            function (success) {
                                localStorage.setItem("user_id", success.data.user_id);
                                localStorage.setItem("username", success.data.provider_id)
                                $location.path('/homepage');
                            });


                    });
            }


}])
;
