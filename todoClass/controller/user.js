const bcrypt=require("bcrypt");
const User=require("../Models/user");
const {setUser ,getUser} =require("../services/auth");
const { v4: uuidv4 } = require('uuid');
//signup page
exports.signup= async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        //checking if the same Email exists
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "email already exists"
            })
        }
        //hashing the password
        let hashedPassword;
        try{
            //password and salt rounds
            hashedPassword=await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in hashing Password"
            });
        }
        //remember password: hashedpassword
        const createUser= await User.create({name,email,password:hashedPassword});
        res.redirect("/login");
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
        success:false,
        message:"Server Error"
    });
    }

}

//login page
exports.login= async(req,res)=>{
    try{
        console.log("login page")
        const {email,password}=req.body;
        //getting user deatils by finding the given email in database
        const existingUser=await User.findOne({email});
        if(!existingUser){
            return res.status(400).json({
                success: false,
                message: "Wrong email"
            })
        }
        //compare password
        let comparepassword=await bcrypt.compare(password,existingUser.password);
        if(!comparepassword){
            return res.status(400).json({
                success: false,
                message: "Wrong password"
            })
        }
        // this for stateful
        // const sessionId = uuidv4();
        // setUser(sessionId, existingUser);
        // res.cookie("uid", sessionId);
        
        //This is for stateless
        const token=setUser(existingUser);
        res.cookie("uid",token);


        //go to the gettodo page on getting logged in
        res.redirect("/api/v1/gettodo")
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
        success:false,
        message:"Server Error"
    });
    }
}

// exports.logout=async(req,res)=>{
//     console.log(req.cookies)
//     const userid= req.cookies?.uid;
//     outUser(userid);
//     console.log(req.cookies)
//     res.redirect("/login");
// }