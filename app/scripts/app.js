'use strict';

angular
  .module('devAssessmentApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/bookings', {
        templateUrl: 'views/bookings.html',
        controller: 'BookingsCtrl'
      })
      .when('/leads', {
        templateUrl: 'views/leads.html',
        controller: 'LeadsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  });
