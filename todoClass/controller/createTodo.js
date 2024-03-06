//importing the model
const express=require("express")
const Todo=require("../Models/todo");
const app=express();
//define route handeler

app.use(express.json());
exports.createTodo =async(req,res)=>{
    try{
        const createdBy=req.user._id
        const{title,description}=req.body; //destructuring and extracting from request body
        
        const response= await Todo.create({title,description,createdBy});
        
        res.render("form",{
            t:title,
            des:description,
        })
        
    }
    catch(err)
    {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            mssg:err.message
        });
    }
}