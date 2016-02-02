/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('BookingCtrl', () => {
  let ctrl;

  beforeEach(module('bookings'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('BookingCtrl');
  }));

  it('should have ctrlName as BookingCtrl', () => {
    expect(ctrl.ctrlName).toEqual('BookingCtrl');
  });
});
