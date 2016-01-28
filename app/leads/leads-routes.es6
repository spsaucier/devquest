(function () {
  'use strict';

  angular
    .module('leads')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('leads', {
        url: '/leads',
        templateUrl: 'leads/views/leads.tpl.html',
        controller: 'LeadsCtrl'
      });
  }
}());
