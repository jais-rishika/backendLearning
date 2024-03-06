const express=require("express");
const userrouter =express.Router();

const {signup ,login } =require("../controller/user");
userrouter.post("/signup",signup);
userrouter.post("/login",login);
module.exports =userrouter;
