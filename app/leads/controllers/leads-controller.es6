(function () {
  'use strict';

  class LeadsCtrl {
    constructor(GetData, $log) {
      var vm = this;
      vm.filters = {
        date: {
          min: new Date(),
          max: ''
        },
        guests: {
          min: '',
          max: ''
        }
      };
      vm.getLeads = function (filters) {
        var promise = GetData.getLeads(filters);
        promise.then(
          function (payload) {
            vm.data = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading leads', errorPayload);
          }
        );
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
