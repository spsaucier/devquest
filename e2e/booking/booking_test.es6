/* global describe, beforeEach, it, browser, expect */
'use strict';

import BookingPage from './booking.po';

describe('Booking page', () => {
  let bookingPage;

  beforeEach(() => {
    bookingPage = new BookingPage();
    browser.get('/#/booking/:id');
  });

  it('should say BookingCtrl', () => {
    expect(bookingPage.heading.getText()).toEqual('booking');
    expect(bookingPage.text.getText()).toEqual('BookingCtrl');
  });
});
