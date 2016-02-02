/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('LocationCtrl', () => {
  let ctrl;

  beforeEach(module('locations'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('LocationCtrl');
  }));

  it('should have ctrlName as LocationCtrl', () => {
    expect(ctrl.ctrlName).toEqual('LocationCtrl');
  });
});
