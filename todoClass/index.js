//instance of the server
const express=require("express");
const app=express(); 

require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo API
const todoRoutes=require("./route/todos");

//mount the todo api routes
app.use("/api/v1",todoRoutes);

//start Server
app.listen(PORT, ()=>{
    console.log(`Server startes running successfully at ${PORT}`);
});

//connect to the db
const dbConnect=require("./config/database");
dbConnect();
//default route
app.get("/",(req,res)=> {res.send(`<h1>Homepage</h1>`)})