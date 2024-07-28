# playwright-javascript-framework
Here’s a step-by-step guide to run the project, including installing dependencies:
1. Clone the Repository:
   git clone https://github.com/ragothamang/playwright-javascript-framework.git
   cd playwright-javascript-framework
2. Install Dependencies:
   Make sure you have Node.js installed, then run:
   npm install
3. Configure Playwright (if needed):
   Open playwright.config.js and ensure the settings, such as baseURL, are correctly configured.
4. Run Tests:
   Execute the tests using: npx playwright test
5. Generate Allure Report:
   To generate and view the Allure report after the tests have run:
   npx playwright show-report

# Pre-requisite to use this suite as-is

- Create an account in salesforce.com use this link ( https://developer.salesforce.com/signup )
- Remember the username and password

# Changes in the test case
- Goto -> login.test.js file and provide correct username and password
   
- await loginPage.enterUsername('username');
- await loginPage.enterPassword('password');

# How to run the script
 - install VScode
 - install playwright plugin
 - import the project to the Vscode
 - make the changes to the login.test.js file and provide correct username and password (mention in the above para)
 - open the Terminal
 - type npx playwright test

Once the test is completed report automatically open in browser

 


