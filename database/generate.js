// index.js
module.exports = function () {
  var faker = require('faker'),
      _ = require('lodash'),
      data = {
        locations: [],
        bookings: [],
        leads: []
      },
      statuses = ['Canceled', 'Confirmed', 'Tentative', 'Closed'],
      bookingType = ['Event', 'Party', 'Celebration', 'Reunion', 'Meeting', 'Bar Mitzvah'],
      locationType = ['Restaurant', 'Bar & Grill', 'Coffee', 'Winery', 'Events', 'Bowling Alley'],
      start,
      i;

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getDate() {
    return getRandomArbitrary(Date.now() - 31536000, Date.now() + 31536000);
  }
  function getFutureDate() {
    return getRandomArbitrary(Date.now(), Date.now() + 31536000);
  }
  // Create 100 locations
  for (i = 1; i <= 100; i++) {
    start = getDate();
    data.locations.push({
      id: i,
      name: faker.company.companyName() + ' ' + _.sample(locationType),
      details: faker.company.bs(),
      logo: faker.image.business(),
      website: faker.internet.url(),
      address: {
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode()
      }
    });
  }
  // Create 5000 bookings
  for (i = 1; i <= 5000; i++) {
    start = getDate();
    data.bookings.push({
      id: i,
      name: faker.company.companyName() + ' ' + _.sample(bookingType),
      status: _.sample(statuses),
      guests: getRandomArbitrary(10, 300),
      start: start,
      end: start + getRandomArbitrary(0, 576000),
      locationId: getRandomArbitrary(1, 100)
    });
  }
  // Create 1000 leads
  for (i = 1; i <= 1000; i++) {
    start = getDate();
    data.leads.push({
      id: i,
      name: faker.company.companyName() + ' ' + _.sample(locationType),
      start: getFutureDate(),
      guests: getRandomArbitrary(10, 300),
      locationId: getRandomArbitrary(1, 100)
    });
  }
  return data;
};
