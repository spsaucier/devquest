/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('LocationsCtrl', () => {
  let scope;

  beforeEach(module('locations'));

  beforeEach(inject(($rootScope, $controller) => {
    scope = $rootScope.$new();
    $controller('LocationsCtrl', {$scope: scope});
  }));

  it('should have ctrlName as LocationsCtrl', () => {
    expect(scope.locations.ctrlName).toEqual('LocationsCtrl');
  });
});
