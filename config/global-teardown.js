// config/global-teardown.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

module.exports = () => {
  console.log('Generating Allure Report...');
  try {
    const resultsDir = path.resolve(__dirname, '../allure-results');
    const reportDir = path.resolve(__dirname, '../allure-report');
    if (fs.existsSync(resultsDir)) {
      execSync(`npx allure generate ${resultsDir} --clean -o ${reportDir}`);
      console.log('Allure Report generated successfully.');
      console.log('Opening Allure Report...');
      execSync(`npx allure open ${reportDir}`);
    } else {
      console.error('Allure results directory does not exist.');
    }
  } catch (error) {
    console.error('Error generating Allure Report:', error);
  }
};
