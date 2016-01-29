(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name devQuest.factory:GetData
   *
   * @description
   *
   */
  angular
    .module('devQuest')
    .factory('GetData', GetData);

  function GetData($http) {
    let GetDataBase = {};
    GetDataBase.getLocations = () => {
      return $http.get('http://localhost:3002/locations/');
    };
    GetDataBase.getBookings = () => {
      return $http.get('http://localhost:3002/bookings/');
    };
    GetDataBase.getLeads = () => {
      return $http.get('http://localhost:3002/leads/');
    };
    return GetDataBase;
  }
}());
