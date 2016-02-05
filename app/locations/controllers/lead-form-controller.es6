(function () {
  'use strict';

  class LeadFormCtrl {
    constructor($log, $stateParams, GetData) {
      let vm = this;

      vm.getLocation = function () {
        var promiseLocation = GetData.getLocation($stateParams.id);
        promiseLocation.then(
          function (payload) {
            vm.data = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading location', errorPayload);
          }
        );
      };

      vm.submit = function () {
        if (vm.form) {
          GetData.createLead(vm.form).then(
            function (payload) {
              console.info(payload);
              vm.submitted = 'Your submission was successful!';
            }
          );
        }
      };

      vm.opened = false;
      vm.open = function () {
        vm.opened = true;
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
   * @name locations.controller:LeadFormCtrl
   *
   * @description
   *
   */
  angular
    .module('locations')
    .controller('LeadFormCtrl', LeadFormCtrl);
}());
