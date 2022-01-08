const hash_pw=require("../../../util/hash_pw");
const gen_auth_token= require("../../../util/generate_token");
const user_model= require("../../../models/user");
const permission_chart= require("../../../models/permission_chart");
const res = require("express/lib/response");


module.exports=async (req, res)=>{
    const {userid, password}= req.body;
    const hash_password= hash_pw(password);
    let x= await user_model.findOne({
        userid:userid,
        password:hash_password
    });

    if(x===null){
        res.send({
            status:"400",
            status_description:"Invalid auth credentials"
        });
        return;
    }
    // collecting usertype
    let user_type=x.user_type;
    let auth_token= gen_auth_token();
    let user={
        userid:userid,
        password:password,
        user_type: user_type,
        auth_token: auth_token
    }

    await user_model.findOneAndUpdate({userid:userid}, {auth_token:auth_token});
    user.status="200";
    user.status_description="logged in successfully";
    user.permissions=permission_chart[x.user_type];
    res.send(user);
}