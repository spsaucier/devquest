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
      'ui.multiselect',
      'home',
      'bookings',
      'leads',
      'locations'
    ])
    .run(function () {

    });
}());
