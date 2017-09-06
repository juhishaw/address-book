  var app = angular.module("addrBook", []);
  app.controller("myCtrl", function ($scope, $http) {

      $scope.refresh = function () {
          $http({
              url: 'api/contacts'
          }).then(function (response) {
              console.log(response.data);
              $scope.contacts = response.data
              //console.log($scope.contact);
          }, function (response) {
              alert('Some error occured')

          });
      }
      $scope.refresh()

      $scope.addItem = function (contact) {
          $http({
              url: 'api/contact',
              method: 'POST',
              data: contact
          })
          $scope.contact = {};
          $scope.refresh();

      }

      $scope.removeItem = function (item) {
          console.log(item);
          $http({
              url: 'api/contact/' + item,
              method: 'DELETE'
          })
          $scope.refresh();
      }
  })
