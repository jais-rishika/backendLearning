//create an express instance
const express=require("express");
const router =express.Router();

//import controller
const {createTodo} =require("../controller/createTodo");
const {getTodo , getTodoById} =require("../controller/getTodo");
const {updateTodo} =require("../controller/updateTodo");
const {deleteTodo} =require("../controller/deleteTodo");

//define API routes
router.post("/createtodo",createTodo);
router.get("/gettodo",getTodo);
router.get("/gettodo/:id",getTodoById);
router.put("/updatetodo/:id",updateTodo);
router.delete("/deletetodo/:id",deleteTodo);

module.exports=router;