const express = require('express');
const UserRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

UserRouter.post('/register',upload.single('avatar'), async(req,res)=>{
    const {name,email}= req.body;
    try{
        const exist= await UserModel.findOne({email});
        if(exist){
            return res.status(400).send("User already exist");
        }
        bcrypt.hash(pass,3,async(err,hash)=>{
            if(err){
                return res.status(400).send(err.message);
            }
            let avatar = await uploadToCloudinary(req?.file?.path);
            const user= new UserModel({
                name,email,avatar,pass:hash
            });
            await user.save();
            const token = jwt.sign({userID:user._id,userEmail:email,userPass:pass,userAvatar:avatar},"token");
            res.status(200).json({message:"User Registered",token,name:user.name,avatar:user.avatar});
        })
    }catch(err){
        return res.status(400).send(err.message)
    }
})

UserRouter.post("/login",async(req,res)=>{
    const {email,pass} =req.body;
    try{
        const user =await UserModel.findOne({email});
        if (user){
            bcrypt.compare(pass,user.pass,(err, decoded) => {
                if(decoded){
                    const token = jwt.sign({userID:user._id,userEmail:email,userPass:pass,userAvatar:user.avatar},"token");
                    res.status(200).json({message:"User Logged In",token,name:user.name,avatar:user.avatar});
                }else{
                    res.status(400).send("Wrong credentials");
                }
            });
        }else{
            res.status(400).send("User does not exist");
        }
    }catch(err){
        res.status(400).send("User is not found");
    }
});

module.exports = UserRouter