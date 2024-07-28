const { page } = require('@playwright/test');
const { logStepAndCapture } = require('../utils/utils');

class BasePage {
    constructor(page) {
        this.page = page;                
    }

    async navigateTo(url) {
        const baseUrl = this.page.context()._options.baseURL;
        console.log('baseUrl >>>>>>>>>>>>>>>> '+baseUrl);
        const fullUrl = new URL(url, baseUrl).href;
        console.log('fullUrl >>>>>>>>>>>>>>>> '+fullUrl);
        await logStepAndCapture(this.page, `navigateTo_baseURL`);
        await this.page.goto(baseUrl);
    }
    async click(locatorCSSorXpath){
        await logStepAndCapture(this.page, `click_${locatorCSSorXpath}`);
        await this.page.locator(locatorCSSorXpath).click();
    }    
    
    async enterValue(locatorCSSorXpath, valueString){
        await logStepAndCapture(this.page, `enterValue_${locatorCSSorXpath}_${valueString}`);
        await this.page.waitForSelector(locatorCSSorXpath); 
        await this.page.waitForLoadState('networkidle');
        const element = this.page.locator(locatorCSSorXpath);
        await element.waitFor({ state: 'attached', timeout: 900000 });
        await element.fill(valueString);
    }
    async getElement(locatorCSSorXpathString){
        await logStepAndCapture(this.page, `getElement_${locatorCSSorXpathString}`);
        await this.page.locator(locatorCSSorXpathString);
    }
}

module.exports = BasePage;