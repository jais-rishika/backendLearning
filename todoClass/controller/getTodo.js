const Todo=require("../Models/todo");
//
exports.getTodo = async(req,res)=>{
    try{
        const todos=await Todo.find({createdBy: req.user._id})
        // res.setHeader("X-myName", "Rishika");
        // res.status(200)
        // .json(
        //     {
        //         success:true,
        //         data:todos,
        //         mssg:"Entire Todo data is fetched",
        //     }
        // )
        res.render("home",{
            data:todos
        })
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

exports.getTodoById =async(req,res)=>{
    try{
        const {id}=req.params;
        const todos=await Todo.findById({_id:id})
        if(!todos){
            return res.status(404).json({
                success:false,
                data:"No data found with given id",
            })
        }
        res.status(200)
        .json(
            {
                success:true,
                data:todos,
                mssg:"Entire Todo data is fetched",
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