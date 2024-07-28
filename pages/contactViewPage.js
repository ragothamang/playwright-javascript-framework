
const { timeout } = require('../playwright.config');
const BasePage = require('./basePage');

class ContactViewPage extends BasePage {
    constructor(page) {
        super(page);       
    }
}

module.exports = ContactViewPage;