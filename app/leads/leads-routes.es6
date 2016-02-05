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
        controller: 'LeadsCtrl',
        controllerAs: 'leads'
      })
      .state('lead', {
        url: '/leads/:id',
        templateUrl: 'leads/views/lead.tpl.html',
        controller: 'LeadCtrl',
        controllerAs: 'lead'
      });
  }
}());
