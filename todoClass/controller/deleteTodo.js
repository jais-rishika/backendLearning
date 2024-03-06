const express=require("express")
const Todo=require("../Models/todo");
const app=express();

app.use(express.json());
exports.deleteTodo = async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(id);
        const todos=await Todo.findByIdAndDelete({_id:id})
        res.status(200)
        .json(
                {
                        success:true,
                        data:todos,
                        mssg:`data is deleted of id: ${id}`,
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