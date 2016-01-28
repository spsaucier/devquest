(function () {
  'use strict';

  class HomeCtrl {
    constructor($scope) {
      $scope.home = {};
      $scope.home.ctrlName = 'HomeCtrl';
    }
  }

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   * @requires $scope
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);
}());
