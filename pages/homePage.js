const { timeout } = require('../playwright.config');
const BasePage = require('./basePage');
const SalesAppPage = require('./salesAppLandingPage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        // this.page = page;
        this.avataricon = "//img[@title=\"User\"]//ancestor::button";
        this.waffleIcon = "//button[contains(@class,'slds-icon-waffle_container')]";
        this.viewAllInAppLauncherMenu = "//button[contains(@aria-label,'View All Applications')]";
        this.searchInAppLauncherModel = "//input[contains(@placeholder,'Search')and @type='search']";
        this.appLink = "//div[@data-name='Sales']//following::a";
        // this.avataricon = page.locator('//img[@title="User"]');
        this.logoutButton = '#logout';
    }

    async click_app_link(){                
        await this.page.waitForLoadState('networkidle');        
        const element = this.page.locator(this.appLink);
    // Wait for the element to be visible
        await element.waitFor({ state: 'attached', timeout: 900000 });
        await this.page.locator(this.appLink).click();
        await this.page.waitForLoadState('networkidle');   
        return new SalesAppPage(this.page);

        // await Promise.all([
        //     this.page.waitForNavigation({ waitUntil: 'networkidle' }),
        //     this.page.click(this.loginButton),
        //   ]);       
    }


    async enter_valuesIn_searchbox(){        
        // await this.avataricon.waitForSelector("//img[@title=\"User\"]");
        await this.page.waitForLoadState('networkidle');
        // await this.page.waitForSelector(this.avatarIcon);
        const element = this.page.locator(this.searchInAppLauncherModel);
    // Wait for the element to be visible
        await element.waitFor({ state: 'attached', timeout: 900000 });
        await this.page.locator(this.searchInAppLauncherModel).click();
        await this.page.locator(this.searchInAppLauncherModel).fill("sales");
        // await this.page.pause();
        // await this.page.pause();
    }

    async click_ViewAll_In_AppLauncherMenu(){        
        // await this.avataricon.waitForSelector("//img[@title=\"User\"]");
        // await this.page.waitForLoadState('networkidle');
        // await this.page.waitForSelector(this.avatarIcon);
        const element = this.page.locator(this.viewAllInAppLauncherMenu);
    // Wait for the element to be visible
        await element.waitFor({ state: 'attached', timeout: 1200000 });
        await this.page.locator(this.viewAllInAppLauncherMenu).click();
        // await this.page.pause();
    }

    async clickWaffleIcon(){        
        // await this.avataricon.waitForSelector("//img[@title=\"User\"]");
        await this.page.waitForLoadState('networkidle');
        // await this.page.waitForSelector(this.avatarIcon);
        const element = this.page.locator(this.waffleIcon);
    // Wait for the element to be visible
        await element.waitFor({ state: 'attached', timeout: 900000 });
        await this.page.locator(this.waffleIcon).click();
        // await this.page.pause();
    }

    async clickAvatarIcon(){        
        // await this.avataricon.waitForSelector("//img[@title=\"User\"]");
        await this.page.waitForLoadState('networkidle');
        // await this.page.waitForSelector(this.avatarIcon);
        const element = this.page.locator(this.avataricon);
    // Wait for the element to be visible
        await element.waitFor({ state: 'attached', timeout: 900000 });
        await this.page.locator(this.avataricon).click();
        // await this.page.pause();
    }


    async logout() {
        
        await this.page.waitForSelector(this.logoutButton);
        await this.page.click(this.logoutButton);
    }
}

module.exports = HomePage;