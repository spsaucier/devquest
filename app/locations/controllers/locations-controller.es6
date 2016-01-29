(function () {
  'use strict';

  class LocationsCtrl {
    constructor($scope, GetData) {
      $scope.getLocations = function () {
        var promise = GetData.getLocations();
        promise.then(
          function (payload) {
            $scope.locations = payload.data;
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
