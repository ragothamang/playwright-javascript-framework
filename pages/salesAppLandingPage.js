const { timeout } = require('../playwright.config');
const BasePage = require('./basePage');
const ContactsPage = require('./contactsPage');

class SalesAppPage extends BasePage {
    constructor(page) {
        super(page);
        this.contacts = "//span[text()='Contacts']//parent::a";
    }   

    async click_ContactsTab(){                
        await this.page.waitForLoadState('networkidle');        
        const element = this.page.locator(this.contacts);    
        await element.waitFor({ state: 'attached', timeout: 900000 });
        await this.page.locator(this.contacts).click();
        await this.page.waitForLoadState('networkidle');   
        return new ContactsPage(this.page);            
    }
}

module.exports = SalesAppPage;