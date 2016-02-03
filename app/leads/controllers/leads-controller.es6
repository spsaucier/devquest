(function () {
  'use strict';

  class LeadsCtrl {
    constructor(GetData, $log) {
      var vm = this,
          page = 0;
      vm.data = [];
      vm.getLeads = function () {
        var promise = GetData.getLeads(page);
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
            $log.error('Failure loading leads', errorPayload);
          }
        );
      };
    }
  }

  /**
   * @ngdoc object
   * @name leads.controller:LeadsCtrl
   * @requires $scope
   *
   * @description
   *
   */
  angular
    .module('leads')
    .controller('LeadsCtrl', LeadsCtrl);
}());
