(function () {
  'use strict';

  class LocationCtrl {
    constructor($log, $stateParams, GetData) {
      let vm = this;

      vm.getLocation = function () {
        var promise = GetData.getLocation($stateParams.id);
        promise.then(
          function (payload) {
            vm.data = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading location', errorPayload);
          }
        );
      };
    }
  }

  /**
   * @ngdoc object
   * @name locations.controller:LocationCtrl
   *
   * @description
   *
   */
  angular
    .module('locations')
    .controller('LocationCtrl', LocationCtrl);
}());
