const fs = require('fs');
const path = require('path');
const { step, attachment } = require('allure-js-commons');

async function logStepAndCapture(page, stepName) {
    try {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const screenshotDir = path.resolve('./screenshots');
        const screenshotPath = path.resolve(screenshotDir, `${timestamp}_${stepName}.png`);

        // Ensure the screenshots directory exists
        fs.mkdirSync(screenshotDir, { recursive: true });

        // Capture the screenshot
        const screenshotBuffer = await page.screenshot();
        // await page.screenshot({ path: screenshotPath });
        console.log(`Step: ${stepName}`);
        console.log(`Screenshot saved: ${screenshotPath}`);

        // Save screenshot buffer to file
        fs.writeFileSync(screenshotPath, screenshotBuffer);

        // Read the file and add attachment to allure
        // const screenshotBuffer = fs.readFileSync(screenshotPath);

        // Use the new Allure API to log step and attach screenshot
        step(stepName, () => {
            attachment(stepName, screenshotBuffer, 'png');
        });
    } catch (error) {
        console.error(`Error capturing screenshot for step: ${stepName}`, error);
    }
}

module.exports = { logStepAndCapture };




/*
const fs = require('fs');
const path = require('path');
const { allure } = require('allure-playwright');

async function logStepAndCapture(page, stepName) {
    try {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const screenshotDir = path.resolve('./screenshots');
        const screenshotPath = path.resolve(screenshotDir, `${timestamp}_${stepName}.png`);

        // Ensure the screenshots directory exists
        fs.mkdirSync(screenshotDir, { recursive: true });

        // Capture the screenshot
        await page.screenshot({ path: screenshotPath });
        console.log(`Step: ${stepName}`);
        console.log(`Screenshot saved: ${screenshotPath}`);

        // Read the file and add attachment to allure
        const screenshotBuffer = fs.readFileSync(screenshotPath);
        allure.step(stepName, () => {
            allure.attachment(stepName, screenshotBuffer, 'image/png');
        });
    } catch (error) {
        console.error(`Error capturing screenshot for step: ${stepName}`, error);
    }
}

module.exports = { logStepAndCapture };
*/