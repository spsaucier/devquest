/* global describe, beforeEach, it, browser, expect */
'use strict';

import LocationsPage from './locations.po';

describe('Locations page', () => {
  let locationsPage;

  beforeEach(() => {
    locationsPage = new LocationsPage();
    browser.get('/#/locations');
  });

  it('should say LocationsCtrl', () => {
    expect(locationsPage.heading.getText()).toEqual('locations');
    expect(locationsPage.text.getText()).toEqual('LocationsCtrl');
  });
});
