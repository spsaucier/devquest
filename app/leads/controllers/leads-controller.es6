(function () {
  'use strict';

  class LeadsCtrl {
    constructor(GetData, $log, $location) {
      var vm = this,
          moment = require('moment-timezone'),
          first = true;
      vm.filters = {
        date: {
          min: $location.search().dateMin ? new Date(moment($location.search().dateMin, 'YYYY-MM-DD').format()) : new Date(),
          max: $location.search().dateMax ? new Date(moment($location.search().dateMax, 'YYYY-MM-DD').format()) : ''
        },
        guests: {
          min: $location.search().guestsMin || '',
          max: $location.search().guestsMax || ''
        }
      };
      vm.clearFilters = function () {
        $location.search({});
        vm.filters = {};
        vm.getLeads();
      };
      vm.getLeads = function (filters = vm.filters) {
        var promise = GetData.getLeads(filters),
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
          $location.search(search);
        }

        promise.then(
          function (payload) {
            vm.data = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading leads', errorPayload);
          }
        );
        first = false;
      };

      vm.minDate = new Date(new Date().valueOf() - 2 * 365 * 24 * 60 * 60 * 1000);
      vm.maxDate = new Date(new Date().valueOf() + 2 * 365 * 24 * 60 * 60 * 1000);
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
    }
  }

  /**
   * @ngdoc object
   * @name leads.controller:LeadsCtrl
   * @requires vm
   *
   * @description
   *
   */
  angular
    .module('leads')
    .controller('LeadsCtrl', LeadsCtrl);
}());
