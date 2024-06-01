import {UserModel} from '../models/user.model';




const loginUser = asyncHandler( async(req,res) => {

    const {email,pass} =req.body;
    console.log(req.body);
    
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
})


export {

    loginUser
}