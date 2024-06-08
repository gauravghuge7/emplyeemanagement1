import { UserModel } from "../../models/index.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

const cookiesOptions = {

    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,

}


const loginUser = asyncHandler(async(req, res) => {

    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const user = await UserModel.findOne({ 
            email:email,
            id: email 
        });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(400).json({ message: "Invalid password" });
        }


        const userToken = await user.generateUserToken();

        

        return res
        .status(200)
        .cookie("userToken", userToken, cookiesOptions)
        .json(
            new ApiResponse(200, "User logged in successfully", )

        )
        
    } 
    
    catch (error) {
        return res.status(400).send(error.message);
    }

   

});


const logoutUser = asyncHandler(async(req, res) => {

    try {
    
        
        
        
        return res.status(200).json({ message: "User logged out successfully" });

        
    } 
    catch (error) {
        
    }
});


const updateAvatar = asyncHandler(async(req, res) => {
    
    const { email } = req.user;

    console.log(req.user);

    try {
        const user = await UserModel.findOne({ email: email });

        if(!user) {
            return res
            .status(400)
       
            .json({ message: "User not found" });
        }
        

        const path = req.file.path;

        const response = await uploadOnCloudinary(path);

        console.log(response);

        if(!response) {
            return res.status(400).json({ message: "Error uploading avatar" });
        }

        user.avatar.public_id = response.public_id;
        user.avatar.secure_url = response.secure_url;

        await user.save();

        
        return res
            .status(200)
            .json({ message: "avatar uploaded successfully" });
        
    } catch (error) {
        res.status(400).send("User not found");
    }
});




const updateProfile = asyncHandler(async(req, res) => {

    const { email } = req.user;

    try {
        const { phoneNumber, bio } = req.body;

        const user = await UserModel.findOne({ email });

        if(!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if(phoneNumber) {
            user.phoneNumber = phoneNumber;
        }

        if(bio) {
            user.bio = bio;
        }

        await user.save();

        return res
        .status(200)
        .json(new ApiResponse(200, "profile updated successfully", user));
        
    } 
    catch (error) {
        
        return res.status(400).send(error.message);

    }

});



const updatePassword = asyncHandler(async(req, res) => {

    const { email } = req.user;

    try {
    
        const { newPassword, confirmPassword } = req.body;

        if(!newPassword || !confirmPassword) {
            return res.status(400).json({ message: "Password is required" });
        }

        const user = await UserModel.findOne({ email });

        if(!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if(newPassword !== confirmPassword) {
            return res.status(400).json({ message: "Password does not match" });
        }

        const encryptedPassword = await bcrypt.hash(newPassword, SALT_ROUND);

        user.password = encryptedPassword;

        await user.save();

        return res.json(new ApiResponse(200, "Password Updated", user));
        
    } 
    
    catch (error) {
        
    }

});


const getUserProfile = asyncHandler(async(req, res) => {

    const { email } = req.user;

    try {
        const user = await UserModel.findOne({ email });

        if(!user) {
            return res.status(400).json({ message: "User not found" });
        }


        const userProfile = {

            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            bio: user.bio,
            avatar: user.avatar,
            isActive: user.isActive,
            role: user.role,
            createdAt: user.createdAt,
            sessions: user.sessions,
            hasClockedToday: user.hasClockedToday,
            leaveApplication: user.leaveApplication,
            attendance: user.attendance,

        };



        return res.json(new ApiResponse(200, "User Profile fetched successfully", userProfile));
        
    } 
    catch (error) {
        
        return res.status(400).send(error.message);
    }

});





const acceptDailyReport = asyncHandler(async(req, res) => {});





export { 
    loginUser,
    updateAvatar,
    updateProfile,
    updateBio,
    logoutUser,
    getUserProfile,
    acceptDailyReport,
    updatePassword
    
};