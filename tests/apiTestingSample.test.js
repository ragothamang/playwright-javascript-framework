// salesforce-api.spec.js
const { test, expect, request } = require('@playwright/test');
const { authenticate } = require('../config/apiAuth');

test('Create a Salesforce record', async () => {
  const resToken = await authenticate();
  console.log('resToken-->  ',resToken);
//   const token = '00D7F000006k3ha!AQ4AQMyjfDacCVNer7.IL08dPtK7S3VwXaFp2QX9lhF2GvrPla5uEofzUUVhOhoc9SFhA_64qtflsI1.ZVCLcfB2r6AqdSM7';
  const token = resToken;
  const apiContext = await request.newContext({
    baseURL: 'https://rg-custom-app-dev-ed.my.salesforce.com',
    extraHTTPHeaders: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
//   services/data/v61.0/sobjects/Contact
  const response = await apiContext.post('/services/data/v61.0/sobjects/Contact/', {
    data: {
        FirstName: 'rg aug 9 fn test3',
        LastName: 'rg aug 9 nn test3',
        Email: 'rgaug9@test3.com',
        Phone:'1234567899873'
    }
  });

//   expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
    console.log('Response Body:-->', responseBody);
  console.log('Record ID:', responseBody.id);
});
