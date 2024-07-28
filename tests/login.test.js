const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const testData = require('../data/createContactData.json');
// const HomePage = require('../pages/homePage');
// const { addStep } = require('@playwright/test-allure-reporter');
const allure = require('allure-playwright');

test.describe('Login Tests', () => {
    let loginPage;
    let homePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateTo();
    });

    for(const data of testData){
        test(`Login and create Contact ${data.testCaseDescription}`, async ({ page }) => {
            test.setTimeout(360000);
            await loginPage.enterUsername('username');
            await loginPage.enterPassword('password');            
            // const 
            homePage = await loginPage.clickLoginButton();
            // console.log('>>>>>>>>>>>>>>>', homePage)
            // await homePage.clickAvatarIcon();
            await homePage.clickWaffleIcon();
            await homePage.click_ViewAll_In_AppLauncherMenu();
            await homePage.enter_valuesIn_searchbox();
            let SalesAppPage = await homePage.click_app_link();
    
            let ContactsListPage = await SalesAppPage.click_ContactsTab();        
            let newContactModalPage = await ContactsListPage.click_New();
            await newContactModalPage.enter_lastName('rgdata');
            await newContactModalPage.click_save();
        });
    }    
});



/*
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/homePage');

test.describe('Login Tests', () => {
    let loginPage;
    let homePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await loginPage.navigateTo('/');
    });

    test('User can login with valid credentials', async ({ page }) => {
        test.setTimeout(60000);
        await loginPage.login('ragothamanu@gmail.com', 'Gr@salesforce202404');
        // await page.pause();
        // expect(await page.title()).toBe('Home Page'); // Replace with actual title
    });
});
*/