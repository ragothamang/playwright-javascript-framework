const { timeout } = require('../playwright.config');
const BasePage = require('./basePage');
const ContactViewPage = require('./contactViewPage');
class ContactModalPage extends BasePage {
    constructor(page) {
        super(page);
        this.lastName = "//input[@name='lastName']";    
        this.save = "//button[@name='SaveEdit']";   
    }
    async enter_lastName(lastName){                
        await this.page.waitForLoadState('networkidle');        
        const element = this.page.locator(this.lastName);    
        await element.waitFor({ state: 'attached', timeout: 900000 });
        await this.page.locator(this.lastName).click();
        await this.page.fill(this.lastName,lastName)
    }

    async click_save(){                
        await this.page.waitForLoadState('networkidle');        
        const element = this.page.locator(this.save);    
        await element.waitFor({ state: 'visible', timeout: 900000 });
        await this.page.locator(this.save).click();
        return new ContactViewPage(this.page);
    }
   
}

module.exports = ContactModalPage;