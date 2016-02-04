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
    GetDataBase.getLocationNested = (id, entity) => {
      return $http.get(base + '/locations/' + id + '/' + entity + '?_sort=start&_order=ASC');
    };
    GetDataBase.getBookings = (page = 0, limit = 50) => {
      let start = page * limit;
      return $http.get(base + '/bookings/?_sort=start&_order=ASC&_start=' + start + '&_end=' + (start + limit));
    };
    GetDataBase.getBooking = (id) => {
      return $http.get(base + '/bookings/' + id);
    };
    GetDataBase.getLeads = (page = 0, limit = 50) => {
      let start = page * limit;
      return $http.get(base + '/leads/?_sort=start&_order=ASC&_start=' + start + '&_end=' + (start + limit));
    };
    GetDataBase.getLead = (id) => {
      return $http.get(base + '/leads/' + id);
    };
    return GetDataBase;
  }
}());
