'use strict'

homeController.$inject = ['$scope']
function homeController($scope){

  $scope.view = {}
  $scope.view.test = "booya"

};

module.exports = homeController;
