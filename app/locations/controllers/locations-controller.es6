(function () {
  'use strict';

  class LocationsCtrl {
    constructor($log, GetData) {
      var vm = this;

      vm.getLocations = function () {
        var promise = GetData.getLocations(true);
        promise.then(
          function (payload) {
            vm.data = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading locations', errorPayload);
          }
        );
      };
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
