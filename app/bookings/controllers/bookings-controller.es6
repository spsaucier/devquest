(function () {
  'use strict';

  class BookingsCtrl {
    constructor($scope, GetData) {
      $scope.getBookings = function () {
        var promise = GetData.getBookings();
        promise.then(
          function (payload) {
            $scope.bookings = payload.data;
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
