const mongoose = require("mongoose");

const user_model=  new mongoose.Schema({ 
    userid: {
        type: String, 
        required: true
    },
    password:{
        type:String,
        required: true
    },
    user_type:{
        type:String,
        enum:['Data Scientist', 'Data Analysist', 'BI Analyst', 'Admin'],
        required: true,
        default: "User"
    },
    auth_token:{
        type:String,
        required: true
    }
});

module.exports= mongoose.model("user_model", user_model);