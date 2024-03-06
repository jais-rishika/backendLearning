//instance of the server
const express=require("express");
const app=express(); 
const path=require("path");
const cookieParser = require('cookie-parser');


//set engine
require("dotenv").config();
const PORT=process.env.PORT || 4000;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

//middleware to parse json request body
app.use(express.json());
//when we want to pass form data
app.use(express.urlencoded({extended:false}));
//npm i cookie parser
app.use(cookieParser());
//static->passing static files -> path till public folder
//process.cwd-> current working directory to public
app.use(express.static(path.join(process.cwd(),"public")));


//import routes for todo API
const todoRoutes=require("./route/todos");
const staticRoutes=require("./route/staticroutes");
const {restrictUser , checkAuth}=require("./middleware/auth")
const userrouter =require("./route/user")

//mount the todo api routes
app.use("/api/v1",restrictUser,todoRoutes);
app.use("/",checkAuth,staticRoutes)
app.use("/users",userrouter);

//start Server
app.listen(PORT, ()=>{
    console.log(`Server startes running successfully at ${PORT}`);
});

//connect to the db
const dbConnect=require("./config/database");
dbConnect();
