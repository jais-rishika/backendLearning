const express=require("express")
const Todo=require("../Models/todo");
const app=express();
app.use(express.json());
exports.updateTodo = async(req,res)=>{
    try{
        const id=req.params.id;
        console.log("this is update form"+id);
        const {title,description} =req.body
        const todos=await Todo.findByIdAndUpdate({_id:id},
           {title,description,updatedAt:Date.now()},
           {new:true})
           res.status(200)
        .json(
            {
                success:true,
                data:todos,
                mssg:`Todo data is updated at id: ${id}`,
            }
        )
    }
    catch(err)
    {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            mssg:err.message,
        });
    }
}