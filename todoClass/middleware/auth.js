const {getUser} =require("../services/auth");
exports.restrictUser=async (req,res,next)=>{
    //attempts to retrieve the user_id from the cookies of the request object
    const user_id=req.cookies?.uid;
    if(!user_id){
        res.status(401).send("Unauthorized ,login to fetch the data");
        // res.redirect("/users/login");
        return;
    }
    console.log("user_id")
    const user=getUser(user_id);
    if(!user){
        res.status(401).send("Unauthorized");
        res.redirect("/users/login");
        return;
    }
    req.user =user;
    //the next() function to proceed to the next middleware in the chain.
    next();
}

//this check authorization that only authorized user can exis their content like if 1 created a todo list one one else should be able to see that list so on..
exports.checkAuth =async(req,res,next)=>{
    const userid= req.cookies?.uid;
    
    const user=getUser(userid);
    req.user=user;
    next();
}