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


const logoutUser = asyncHandler( async(req,res) => { 

})


const updateAvatar = asyncHandler( async(req,res) => {
    
    const {Email} = req.cookies;

    try {
    
        const user = await UserModel.findOne({email:Email});

        if(req.file) {

            const {filename, path} = req.file;
            const newPath = path + filename;
            const avatar = await s3.uploadFile(newPath);
            user.avatar = avatar;
            await user.save();
            res.status(200).json({message:"avatar updated"});
        }

        await user.findByIdAndUpdate(email, {
            

        })
        


        return res.status(200).json({message:"avatar updated"});
    
    } 
    
    catch (error) {
        
        res.status(400).send("User not found");
    }
    

})


const updateEmail = asyncHandler( async(req,res) => {

})


const updateBio = asyncHandler( async(req,res) => { 

})


const updatePassword = asyncHandler( async(req,res) => { 

})



const acceptLeaveApplication = asyncHandler( async(req,res) => {   

})


const acceptDailyReport = asyncHandler( async(req,res) => { 

})



const getUserProfile = asyncHandler( async(req,res) => { 

})


const getUserDashboard = asyncHandler( async(req,res) => { 

})




export {

    loginUser
}