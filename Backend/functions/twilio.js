const twilio = require('twilio');

const accountSid = 'AC5b1b2c7bd1c87b8a87ecb8d053521292';
const authToken = '8f25ba83352da0b172c1b165e8126a3a';

module.exports = new twilio.Twilio(accountSid, authToken);
