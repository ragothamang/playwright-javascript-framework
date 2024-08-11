// apiAuth.js
// const axios = require('axios');

// async function authenticate() {
//   const response = await axios.post('https://login.salesforce.com/services/oauth2/token', {
//     grant_type: 'password',
//     client_id: process.env.SALESFORCE_CLIENT_ID,
//     client_secret: process.env.SALESFORCE_CLIENT_SECRET,
//     username: process.env.SALESFORCE_USERNAME,
//     password: process.env.SALESFORCE_PASSWORD
//   });
//   return response.data.access_token;
// }


// auth.js
const axios = require('axios');

async function authenticate() {
  const response = await axios.post('https://login.salesforce.com/services/oauth2/token', new URLSearchParams({
    grant_type: 'password',
    client_id: '3MVG9d8..z.hDcPLMjDkuw8JraLQJJcU2kvuQU9gAmYfkx6_0EdeyC7q0AmoRF2EqACaOsfa.bvE_Ooe6FhZK',          // Directly include your client ID
    client_secret: 'E6EE02320A8F24A88A86C730DEE0650702E97283E6600CD099E4FA1CEC361E0B',  // Directly include your client secret
    username: 'ragothamanu@gmail.com',            // Directly include your username
    password: 'Gr@salesforce202404'+'P55Gd9KGHRauMrc3eTt6my6Qv'           // Directly include your password
    // password: 'your-password' + 'your-security-token'
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  // console.log('response token--> ',response);
  return response.data.access_token;
}

module.exports = { authenticate };


module.exports = { authenticate };
