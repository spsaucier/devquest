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
    GetDataBase.getBookings = (numberGuests, status) => {
      return $http.get(base + '/bookings/?_sort=start&_order=ASC&guests='+numberGuests+'&status_like='+status);
    };
    GetDataBase.getBooking = (id) => {
      return $http.get(base + '/bookings/' + id);
    };
    GetDataBase.getLeads = () => {
      return $http.get(base + '/leads/?_sort=start&_order=ASC');
    };
    GetDataBase.getLead = (id) => {
      return $http.get(base + '/leads/' + id);
    };
    return GetDataBase;
  }
}());
