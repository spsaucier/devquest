/* global describe, beforeEach, it, browser, expect */
'use strict';

import LocationPage from './location.po';

describe('Location page', () => {
  let locationPage;

  beforeEach(() => {
    locationPage = new LocationPage();
    browser.get('/#/locations/{id}');
  });

  it('should say LocationCtrl', () => {
    expect(locationPage.heading.getText()).toEqual('location');
    expect(locationPage.text.getText()).toEqual('LocationCtrl');
  });
});
