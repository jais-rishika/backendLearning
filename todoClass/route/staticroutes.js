const express=require("express");
const strouter =express.Router();

strouter.get("/",(req,res)=>{
    res.render("form");
})

strouter.get("/updatetodo/:id",(req,res)=>{
    res.render("updateform");
})

strouter.get("/signup",(req,res)=>{
    res.render("signup");
})

strouter.get("/login",(req,res)=>{
    res.render("login");
})
module.exports=strouter;