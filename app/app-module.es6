(function () {
  'use strict';

  /* @ngdoc object
   * @name devQuest
   * @description
   *
   */
  angular
    .module('devQuest', [
      'ui.router',
      'ui.bootstrap',
      'home',
      'bookings',
      'leads',
      'locations'
    ])
    .run(function ($rootScope, $location) {
      $rootScope.location = $location;
    });
}());
