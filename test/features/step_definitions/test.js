'use strict';

const assert = require('assert');

module.exports = function basicTest() {
  this.Given(/^the server is running$/, () => {
    // start the server
  });

  this.When(/^I connect to the server$/, () => {
    browser.url('http://localhost:3000/');
  });

  this.Then(/I see the message "([^"]*)"$/, (message) => {
    assert.equal(browser.getText('html'), message);
  });
};
