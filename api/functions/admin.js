const admin = require("firebase-admin");
const serviceAccount = require('./service.json');


const fb = admin.initializeApp();

module.exports = fb;