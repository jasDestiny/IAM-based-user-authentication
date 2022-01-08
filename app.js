const express=require("express");
const app=express();
const port= 6969 || process.env.PORT;
const mongoose=require("mongoose");
require('dotenv').config();

// MongoDB atlas connection
mongoose.connect(process.env.MONGO_CONN);

// body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Routes
app.get("/", require("./controllers/home/home"));
app.post("/users/login",  require("./controllers/auth/login/login"));
app.post("/users/signup", require("./controllers/auth/signup/signup"));
app.post("/test", require("./controllers/test/test"));
app.listen(process.env.PORT2||process.env.PORT,require("./controllers/port/port"));