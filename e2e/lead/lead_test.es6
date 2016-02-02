/* global describe, beforeEach, it, browser, expect */
'use strict';

import LeadPage from './lead.po';

describe('Lead page', () => {
  let leadPage;

  beforeEach(() => {
    leadPage = new LeadPage();
    browser.get('/#/lead/:id');
  });

  it('should say LeadCtrl', () => {
    expect(leadPage.heading.getText()).toEqual('lead');
    expect(leadPage.text.getText()).toEqual('LeadCtrl');
  });
});
