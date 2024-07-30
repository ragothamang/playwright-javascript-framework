const { defineConfig, devices } = require('@playwright/test');
const { AllureReporter } = require('allure-playwright');
module.exports = defineConfig({
    reporter: [
        ['list'],
        ['allure-playwright',{outputFolder:'allure-results'}],
    ],
    globalTeardown: require.resolve('./config/global-teardown'),
    projects: [
        {
            name: 'Chromium',
            use: { ...devices['Desktop Chrome'] },
        }
        // ,
        // {
        //     name: 'Firefox',
        //     use: { ...devices['Desktop Firefox'] },
        // }
        //,
        // {
        //     name: 'WebKit',
        //     use: { ...devices['Desktop Safari'] },
        // },
    ],
    use: {
        baseURL: 'http://login.salesforce.com', // Replace with your base URL
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },
    outputDir: 'allure-results',
    retries: 0,
    workers: 1, // Adjust this number based on your machine's capabilities
});