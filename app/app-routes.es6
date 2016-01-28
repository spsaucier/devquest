(function () {
  'use strict';

  angular
    .module('devQuest')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
}());
