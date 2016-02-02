/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('LeadCtrl', () => {
  let ctrl;

  beforeEach(module('leads'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('LeadCtrl');
  }));

  it('should have ctrlName as LeadCtrl', () => {
    expect(ctrl.ctrlName).toEqual('LeadCtrl');
  });
});
