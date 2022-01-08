require('dotenv').config(); 

module.exports=()=>{
    console.log(`Backend is running on port ${process.env.PORT2||process.env.PORT}`);
};