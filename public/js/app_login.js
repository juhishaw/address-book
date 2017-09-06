var app = angular.module('addrBook', []);

app.run(function($rootScope){
    if(localStorage.getItem('token') != null){
        $rootScope = localStorage.getItem('token')
    }
});

app.controller('login', function ($scope, $location, $http) {

    $scope.login = function () {
        $http({
            url: '/login',
            method: 'POST',
            data: $scope.user
        }).then(function (response) {
            $scope.checkLogin = response;
            console.log($scope.checkLogin)
            console.log($scope.checkLogin.data.token)
            localStorage.setItem('token',$scope.checkLogin.data.token);
            
            if($scope.checkLogin.data.success===true){
            alert("Successfully Registered!")
                window.location='main.html'
                }
            else{
                alert("Invalid Username/Password!")
                window.location='index.html'
                
}
        }, function (response) {
            $scope.checkLogin = response;
            console.log(response.data)
            
                    });
    }

});


//
//var app = angular.module('addrBook', []);
//
//
//
app.controller('sign', function ($scope, $http, $location) {

    $scope.sign = function () {
        console.log($scope.data)
        $http({
            url: '/registration',
            method: 'POST',
            data: $scope.data,
        }).then(function (response) {
            window.location = 'index.html'
            alert("Successfully Registered!");
            console.log(response.data)

        }, function (response) {
            console.log(response.data)
        });

    };



});

