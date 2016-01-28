(function () {
  'use strict';

  angular
    .module('bookings')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('bookings', {
        url: '/bookings',
        templateUrl: 'bookings/views/bookings.tpl.html',
        controller: 'BookingsCtrl'
      });
  }
}());
