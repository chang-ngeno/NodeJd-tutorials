const crypto = require('crypto');  
const secret = 'abcdefg';  
const password = "myPassword";
const hash = crypto.createHmac('sha256', secret)  
                   .update(password+"Username")  
                   .digest('hex');  
console.log(hash.toUpperCase());