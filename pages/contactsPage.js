const { timeout } = require('../playwright.config');
const BasePage = require('./basePage');
const ContactModalPage = require('./newContactModalPage');


class ContactsPage extends BasePage {
    constructor(page) {
        super(page);
        this.new = "//div[text()='New']//parent::a";       
    }
    async click_New(){                
        await this.page.waitForLoadState('networkidle');        
        const element = this.page.locator(this.new);    
        await element.waitFor({ state: 'attached', timeout: 900000 });
        await this.page.locator(this.new).click();
        return new ContactModalPage(this.page);
    }
   
}

module.exports = ContactsPage;