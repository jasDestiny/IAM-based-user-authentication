var CryptoJS = require("crypto-js");
require("dotenv").config();
module.exports=(password)=>{
    var ciphertext = CryptoJS.SHA512(password).toString();
    // Decrypt
    // var bytes  = CryptoJS.AES.decrypt(ciphertext, "process.env.HASH_PW_KEY").toString(CryptoJS.enc.Utf8);
    return ciphertext;
}

