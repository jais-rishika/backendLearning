//mongoose instance
const mongoose=require('mongoose');
//env variable in file processing it
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect("mongodb://127.0.0.1/todo",{
    })
    .then(()=>console.log("DB Connection Established"))
    .catch((error)=>{
        console.log("Issues in DB connection");
        console.error(error.message);
        process.exit(1);
    })
}
module.exports=dbConnect;