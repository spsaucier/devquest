(function () {
  'use strict';

  class LeadsCtrl {
    constructor($scope, GetData) {
      $scope.getLeads = function () {
        var promise = GetData.getLeads();
        promise.then(
          function (payload) {
            $scope.leads = payload.data;
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
