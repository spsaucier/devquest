(function () {
  'use strict';

  class BookingsCtrl {
    constructor($scope) {
      $scope.bookings = {};
      $scope.bookings.ctrlName = 'BookingsCtrl';
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
