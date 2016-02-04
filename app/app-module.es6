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
      'checklist-model',
      'home',
      'bookings',
      'leads',
      'locations'
    ])
    .run(function () {

    });
}());
