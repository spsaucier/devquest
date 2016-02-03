(function () {
  'use strict';

  class BookingsCtrl {
    constructor(GetData, $log) {
      var vm = this,
          page = 0;
      vm.data = [];
      vm.getBookings = function () {
        var promise = GetData.getBookings(page);
        vm.busy = true;
        promise.then(
          function (payload) {
            console.info(payload.data);
            // vm.data = payload.data;
            vm.data = vm.data.concat(payload.data);
            page++;
            vm.busy = false;
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
