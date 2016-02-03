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
      'infinite-scroll',
      'home',
      'bookings',
      'leads',
      'locations'
    ])
    .run(function () {

    });
}());
