/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('LeadFormCtrl', () => {
  let ctrl;

  beforeEach(module('locations'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('LeadFormCtrl');
  }));

  it('should have ctrlName as LeadFormCtrl', () => {
    expect(ctrl.ctrlName).toEqual('LeadFormCtrl');
  });
});
