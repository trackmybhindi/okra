var app = angular.module('myApp', []);
 app.controller('myCtrl', function($scope,$http) {
 $scope.data = {};
$scope.submit= function(){
    console.log('clicked submit');
    $http({
        url: 'http://localhost:8080/blah',
        method: 'POST',
        data: $scope.data
    }).then(function (httpResponse) {
        console.log('response:', httpResponse);
    })
   }
 });