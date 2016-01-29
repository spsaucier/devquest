/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('GetData', () => {
  let factory;

  beforeEach(module('devQuest'));

  beforeEach(inject((GetData) => {
    factory = GetData;
  }));

  it('should have someValue be GetData', () => {
    expect(factory.someValue).toEqual('GetData');
  });

  it('should have someMethod return GetData', () => {
    expect(factory.someMethod()).toEqual('GetData');
  });
});
