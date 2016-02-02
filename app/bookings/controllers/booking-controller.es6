(function () {
  'use strict';

  class BookingCtrl {
    constructor($log, GetData, $filter, $stateParams) {
      let vm = this;

      vm.getBooking = function () {
        var promise = GetData.getBooking($stateParams.id);
        promise.then(
          function (payload) {
            vm.data = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading booking', errorPayload);
          }
        );
      };
    }
  }

  /**
   * @ngdoc object
   * @name bookings.controller:BookingCtrl
   *
   * @description
   *
   */
  angular
    .module('bookings')
    .controller('BookingCtrl', BookingCtrl);
}());
