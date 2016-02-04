(function () {
  'use strict';

  class LocationCtrl {
    constructor($log, $stateParams, GetData) {
      let vm = this;

      vm.getLocation = function () {
        var promiseLocation = GetData.getLocation($stateParams.id),
            promiseLeads = GetData.getLocationNested($stateParams.id, 'leads'),
            promiseBookings = GetData.getLocationNested($stateParams.id, 'bookings');
        promiseLocation.then(
          function (payload) {
            vm.data = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading location', errorPayload);
          }
        );
        promiseLeads.then(
          function (payload) {
            vm.leads = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading location leads', errorPayload);
          }
        );
        promiseBookings.then(
          function (payload) {
            vm.bookings = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading location bookings', errorPayload);
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
