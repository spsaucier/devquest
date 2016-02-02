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
    let GetDataBase = {},
        base = 'http://localhost:3002';
    GetDataBase.getLocations = () => {
      return $http.get(base + '/locations/');
    };
    GetDataBase.getLocation = (id) => {
      return $http.get(base + '/locations/' + id);
    };
    GetDataBase.getBookings = () => {
      return $http.get(base + '/bookings/');
    };
    GetDataBase.getLeads = () => {
      return $http.get(base + '/leads/');
    };
    return GetDataBase;
  }
}());
