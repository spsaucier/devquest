(function () {
  'use strict';

  class LocationsCtrl {
    constructor($scope) {
      $scope.locations = {};
      $scope.locations.ctrlName = 'LocationsCtrl';
    }
  }

  /**
   * @ngdoc object
   * @name locations.controller:LocationsCtrl
   * @requires $scope
   *
   * @description
   *
   */
  angular
    .module('locations')
    .controller('LocationsCtrl', LocationsCtrl);
}());
