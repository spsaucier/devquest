(function () {
  'use strict';

  class LeadsCtrl {
    constructor(GetData, $log, $location) {
      var vm = this,
          moment = require('moment-timezone'),
          currentSearch = $location.search(),
          first = true;
      vm.filters = {
        date: {
          min: currentSearch.dateMin ? new Date(moment(currentSearch.dateMin, 'YYYY-MM-DD').format()) : new Date(),
          max: currentSearch.dateMax ? new Date(moment(currentSearch.dateMax, 'YYYY-MM-DD').format()) : ''
        },
        guests: {
          min: currentSearch.guestsMin || '',
          max: currentSearch.guestsMax || ''
        }
      };
      vm.clearFilters = function () {
        $location.search({});
        vm.filters = {};
        vm.getLeads();
      };
      vm.getLeads = function (filters = vm.filters) {
        var promise = GetData.getFilteredList('leads', filters),
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
