//importing the model
const Todo=require("../Models/todo");
//define route handeler
exports.createTodo =async(req,res)=>{
    try{
        const{title,description}=req.body; //destructuring and extracting from request body
        const response= await Todo.create({title,description});
        //creating a noe todo object and inserting it in the DB
        res.status(200).json(
            {
                succes:true,
                data:response,
                mssg:"Entry Created successfully"
            }
        );
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