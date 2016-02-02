(function () {
  'use strict';

  class LeadCtrl {
    constructor($log, GetData, $filter, $stateParams) {
      let vm = this;

      vm.getLead = function () {
        var promise = GetData.getLead($stateParams.id);
        promise.then(
          function (payload) {
            vm.data = payload.data;
          },
          function (errorPayload) {
            $log.error('Failure loading lead', errorPayload);
          }
        );
      };
    }
  }

  /**
   * @ngdoc object
   * @name leads.controller:LeadCtrl
   *
   * @description
   *
   */
  angular
    .module('leads')
    .controller('LeadCtrl', LeadCtrl);
}());
