/*
const BasePage = require('./basePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.loginButton = '#Login';
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;
*/

const BasePage = require('./basePage');
const HomePage = require('./homePage'); // Assuming HomePage is defined in homePage.js

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        // this.page = page;
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.loginButton = '#Login';
    }

    async enterUsername(username) {            
        await this.page.waitForSelector(this.usernameInput); // Ensure the element is present
        await this.page.fill(this.usernameInput, username);        
        console.log('Entered username');
        return this; // Return this to allow chaining
    }

    async enterPassword(password) {
        await this.enterValue(this.passwordInput, password)
        // await this.page.waitForSelector(this.passwordInput); // Ensure the element is present
        // await this.page.fill(this.passwordInput, password);
        
        console.log('Entered password');
        return this; // Return this to allow chaining
    }

    async clickLoginButton() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'networkidle' }),
            this.page.click(this.loginButton),
          ]);       
            
        // Return HomePage instance after login
        return new HomePage(this.page);
    }
}

module.exports = LoginPage;
