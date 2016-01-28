/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('HomeCtrl', () => {
  let scope;

  beforeEach(module('home'));

  beforeEach(inject(($rootScope, $controller) => {
    scope = $rootScope.$new();
    $controller('HomeCtrl', {$scope: scope});
  }));

  it('should have ctrlName as HomeCtrl', () => {
    expect(scope.home.ctrlName).toEqual('HomeCtrl');
  });
});
