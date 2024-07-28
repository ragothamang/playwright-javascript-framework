const { chromium } = require('playwright');

async function launchBrowser() {
    return await chromium.launch();
}

module.exports = { launchBrowser };