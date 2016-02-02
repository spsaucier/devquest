(function () {
  'use strict';

  class BookingsCtrl {
    constructor(GetData, $log) {
      var vm = this;

      vm.getBookings = function () {
        var promise = GetData.getBookings();
        promise.then(
          function (payload) {
            vm.data = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading bookings', errorPayload);
          }
        );
      };
    }
  }

  /**
   * @ngdoc object
   * @name bookings.controller:BookingsCtrl
   * @requires $scope
   *
   * @description
   *
   */
  angular
    .module('bookings')
    .controller('BookingsCtrl', BookingsCtrl);
}());
