var CryptoJS = require("crypto-js");
require("dotenv").config();

module.exports=()=>{
    const token=(Math.random() + 1).toString(36).substring(7);
    var ciphertoken = CryptoJS.SHA512(token).toString();
    return ciphertoken;
}