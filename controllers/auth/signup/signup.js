const hash_pw=require("../../../util/hash_pw");
const gen_auth_token= require("../../../util/generate_token");
const user_model= require("../../../models/user");
const permission_chart= require("../../../models/permission_chart");

module.exports=async (req, res)=>{
    const {userid, password, user_type}=req.body;
    let hashed_password= hash_pw(password);

    let auth_token= gen_auth_token();
    let user_data={
        userid:userid,
        password:hashed_password,
        user_type:user_type,
        auth_token:auth_token
    }
    
    let x= await user_model.findOne({userid:userid});
    if(x){
        res.send({
            status:"400",
            status_description:"Userid already exists. Choose a different one."
        });
        return;
    }

    await new user_model(user_data).save();

    user_data.status= "200";
    user_data.status_description= "User Account created succesfully";
    user_data.permissions= permission_chart[user_type];
    res.send(user_data);  
    return;
}