(function () {
  'use strict';

  angular
    .module('locations')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('locations', {
        url: '/locations',
        templateUrl: 'locations/views/locations.tpl.html',
        controller: 'LocationsCtrl',
        controllerAs: 'locations'
      })
      .state('location', {
        url: '/locations/:id',
        templateUrl: 'locations/views/location.tpl.html',
        controller: 'LocationCtrl',
        controllerAs: 'location'
      });
  }
}());
