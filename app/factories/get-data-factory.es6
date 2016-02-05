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
    GetDataBase.getLocations = (order = false) => {
      let query = '';
      if (order) {
        query += '?_sort=name&_order=ASC';
      }
      return $http.get(base + '/locations/' + query);
    };
    GetDataBase.saveLocation = (locationData) => {
      return $http.patch(base + '/locations/' + locationData.id, locationData)
        .success(function (data, status) {
          console.info(data, status);
        });
    };
    GetDataBase.getLocation = (id) => {
      return $http.get(base + '/locations/' + id);
    };
    GetDataBase.getLocationNested = (id, entity) => {
      return $http.get(base + '/locations/' + id + '/' + entity + '?_sort=start&_order=ASC');
    };
    GetDataBase.getFilteredList = (entity, filters) => {
      let filterString = '';
      if (filters) {
        if (filters.guests) {
          if (filters.guests.min) {
            filterString += '&guests_gte=' + filters.guests.min;
          }
          if (filters.guests.max) {
            filterString += '&guests_lte=' + filters.guests.max;
          }
        }
        if (filters.date) {
          if (filters.date.min) {
            filterString += '&start_gte=' + new Date(filters.date.min).valueOf();
          }
          if (filters.date.max) {
            filterString += '&start_lte=' + new Date(filters.date.max).setHours(23, 59, 59, 999).valueOf();
          }
        }
        angular.forEach(filters.statuses, (status) => {
          filterString += '&status=' + status;
        });
        angular.forEach(filters.locations, (location) => {
          filterString += '&locationId=' + location;
        });
      }
      return $http.get(base + '/' + entity + '/?_sort=start&_order=ASC' + filterString);
    };
    GetDataBase.saveBooking = (bookingData) => {
      return $http.patch(base + '/bookings/' + bookingData.id, bookingData)
        .success(function (data, status) {
          console.info(data, status);
        });
    };
    GetDataBase.getBooking = (id) => {
      return $http.get(base + '/bookings/' + id + '?_expand=location');
    };
    GetDataBase.saveLead = (leadData) => {
      return $http.patch(base + '/leads/' + leadData.id, leadData)
        .success(function (data, status) {
          console.info(data, status);
        });
    };
    GetDataBase.getLead = (id) => {
      return $http.get(base + '/leads/' + id + '?_expand=location');
    };
    return GetDataBase;
  }
}());
