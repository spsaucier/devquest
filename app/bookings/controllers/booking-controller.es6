(function () {
  'use strict';

  class BookingCtrl {
    constructor($log, GetData, $filter, $stateParams) {
      let vm = this,
          _ = require('lodash');

      vm.getBooking = function () {
        var promise = GetData.getBooking($stateParams.id);
        promise.then(
          function (payload) {
            vm.data = payload.data;
            vm.form = angular.copy(payload.data);
          },
          function (errorPayload) {
            $log.error('Failure loading booking', errorPayload);
          }
        );
      };

      GetData.getLocations().then(
        function (payload) {
          vm.locations = payload.data;
        },
        function (errorPayload) {
          $log.error('Failure loading locations', errorPayload);
        }
      );
      vm.statuses = [
        'Canceled',
        'Closed',
        'Tentative',
        'Confirmed'
      ];

      vm.edit = function () {
        vm.editing = true;
        vm.form = angular.copy(vm.data);
      };

      vm.startOpened = false;
      vm.startOpen = function () {
        vm.startOpened = true;
      };
      vm.endOpened = false;
      vm.endOpen = function () {
        vm.endOpened = true;
      };
      vm.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };
      vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      vm.format = vm.formats[0];

      vm.editing = false;
      vm.save = function () {
        if (vm.form) {
          GetData.saveBooking(vm.form).then(
            function () {
              let index = _.findIndex(vm.locations, (location) => location.id === vm.form.locationId);
              vm.data = angular.copy(vm.form);
              vm.data.location.name = vm.locations[index].name;
              vm.editing = false;
            }
          );
        }
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
