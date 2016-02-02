/* global element, by */
'use strict';

class BookingPage {
  constructor() {
    this.text = element(by.tagName('p'));
    this.heading = element(by.tagName('h2'));
  }
}

module.exports = BookingPage;
