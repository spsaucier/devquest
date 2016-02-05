/* global describe, beforeEach, it, browser, expect */
'use strict';

import LeadFormPage from './lead-form.po';

describe('Lead form page', () => {
  let leadFormPage;

  beforeEach(() => {
    leadFormPage = new LeadFormPage();
    browser.get('/#/:id/lead-form');
  });

  it('should say LeadFormCtrl', () => {
    expect(leadFormPage.heading.getText()).toEqual('leadForm');
    expect(leadFormPage.text.getText()).toEqual('LeadFormCtrl');
  });
});
