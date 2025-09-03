const serverless = require('serverless-http');
const app = require('../../server'); // Points to server.js in root

module.exports.handler = serverless(app);