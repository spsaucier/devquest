(function () {
  'use strict';

  class LeadsCtrl {
    constructor($scope) {
      $scope.leads = {};
      $scope.leads.ctrlName = 'LeadsCtrl';
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
