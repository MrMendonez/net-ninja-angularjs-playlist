var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope) {

  $scope.message = "hey y'all";

  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "green",
      rate: 50,
      available: true
    },
    {
      name: "Crystal",
      belt: "yellow",
      rate: 30,
      available: true
    },
    {
      name: "Ryu",
      belt: "orange",
      rate: 10,
      available: false
    },
    {
      name: "Shaun",
      belt: "black",
      rate: 1000,
      available: true
    }
  ];

}]);