(function () {
  'use strict';

  class LeadsCtrl {
    constructor(GetData, $log) {
      var vm = this;

      vm.getLeads = function () {
        var promise = GetData.getLeads();
        promise.then(
          function (payload) {
            vm.data = payload.data;
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
