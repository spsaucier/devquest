(function () {
  'use strict';

  class BookingsCtrl {
    constructor(GetData, $log, $location) {
      var vm = this,
          moment = require('moment-timezone'),
          currentSearch = $location.search(),
          first = true;
      vm.filters = {
        date: {
          min: currentSearch.dateMin ? new Date(moment(currentSearch.dateMin, 'YYYY-MM-DD').format()) : new Date(),
          max: currentSearch.dateMax ? new Date(moment(currentSearch.dateMax, 'YYYY-MM-DD').format()) : new Date(moment(new Date()).add(1, 'months').format())
        },
        guests: {
          min: currentSearch.guestsMin || '',
          max: currentSearch.guestsMax || ''
        },
        statuses: currentSearch.statuses ? currentSearch.statuses.split(',') : [],
        locations: currentSearch.locations ? currentSearch.locations.split(',') : []
      };
      vm.clearFilters = function () {
        $location.search({});
        vm.filters = {};
        vm.getBookings();
      };
      vm.getBookings = function (filters = vm.filters) {
        var promise = GetData.getFilteredList('bookings', filters),
            search = $location.search();

        if (!first && filters) {
          if (filters.date) {
            if (filters.date.min) {
              search.dateMin = moment(filters.date.min).format('YYYY-MM-DD');
            }
            if (filters.date.max) {
              search.dateMax = moment(filters.date.max).format('YYYY-MM-DD');
            }
          }
          if (filters.guests) {
            if (filters.guests.min) {
              search.guestsMin = filters.guests.min;
            }
            if (filters.guests.max) {
              search.guestsMax = filters.guests.max;
            }
          }
          if (filters.statuses) {
            search.statuses = angular.isArray(filters.statuses) ? filters.statuses.join(',') : filters.statuses;
          }
          if (filters.locations) {
            search.locations = angular.isArray(filters.locations) ? filters.locations.join(',') : filters.locations;
          }
          $location.search(search);
        }

        promise.then(
          function (payload) {
            vm.data = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading bookings', errorPayload);
          }
        );
        first = false;
      };

      GetData.getLocations().then(
        function (payload) {
          vm.locations = payload.data;
        },
        function (errorPayload) {
          $log.error('Failure loading locations', errorPayload);
        }
      );

      vm.calMin = {
        opened: false
      };
      vm.calMax = {
        opened: false
      };
      vm.openMin = function () {
        vm.calMin.opened = true;
      };
      vm.openMax = function () {
        vm.calMax.opened = true;
      };
      vm.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };
      vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      vm.format = vm.formats[0];

      vm.statuses = [
        'Canceled',
        'Closed',
        'Tentative',
        'Confirmed'
      ];
      vm.checkAll = function (filterType) {
        vm.filters[filterType] = angular.copy(vm[filterType]);
      };
      vm.uncheckAll = function (filterType) {
        vm.filters[filterType] = [];
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
