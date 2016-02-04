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
    GetDataBase.getFilteredList = (entity, filter) => {
      let filterString = '';
      if (filter) {
        if (filter.guests) {
          if (filter.guests.min) {
            filterString += '&guests_gte=' + filter.guests.min;
          }
          if (filter.guests.max) {
            filterString += '&guests_lte=' + filter.guests.max;
          }
        }
        if (filter.date) {
          if (filter.date.min) {
            filterString += '&start_gte=' + new Date(filter.date.min).valueOf();
          }
          if (filter.date.max) {
            filterString += '&start_lte=' + new Date(filter.date.max).setHours(23, 59, 59, 999).valueOf();
          }
        }
        angular.forEach(filter.statuses, (status) => {
          filterString += '&status=' + status;
        });
        angular.forEach(filter.locations, (location) => {
          filterString += '&locationId=' + location;
        });
      }
      return $http.get(base + '/' + entity + '/?_sort=start&_order=ASC' + filterString);
    };
    GetDataBase.getBooking = (id) => {
      return $http.get(base + '/bookings/' + id);
    };
    GetDataBase.getLead = (id) => {
      return $http.get(base + '/leads/' + id);
    };
    return GetDataBase;
  }
}());
