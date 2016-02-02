(function () {
  'use strict';

  var moment = require('moment-timezone');

  /**
   * @ngdoc filter
   * @name devQuest.filter:moment
   *
   * @description
   *
   * @param {Array} input The array to filter
   * @returns {Array} The filtered array
   *
   */
  angular
    .module('devQuest')
    .filter('moment', momentFilter);

  function momentFilter() {
    return (input, format) => {
      return moment(input).format(format);
    };
  }
}());
