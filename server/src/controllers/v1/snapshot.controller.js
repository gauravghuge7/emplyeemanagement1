import { UserModel } from "../../models/user.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { Snapshot } from "../../models/snapshot.model.js";
















const sendSnapshot = asyncHandler(async (req, res) => {

    const {email } = req.user;
    const path = req.files.path;


    if(!req.file) {
        return res.status(400).json(new ApiResponse(400, "No file uploaded" ));
    }

   try {
        const user = await UserModel.findOne({email});
    
    
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }    
 
        const response = await uploadOnCloudinary(path);

        if(!response) {
            return res.status(400).json({ message: "File upload failed" });
        }

        user.snapshots.push(response.public_id) = response.public_id;
        user.snapshots.push(response.public_url) = response.public_url;

        user.snapshots

 
        const snapshot = new UserModel({
            email,
            totalHours: req.body.totalHours,
            remarks: req.body.remarks,
            reason: req.body.reason,
        });     
 
        await snapshot.save();
 
        return res
        .status(200)
        .json(new ApiResponse(200, "Snapshot created", user, snapshot));
 
 
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(500, error.message));


    }

});



const getSnapshot = asyncHandler(async (req, res) => {

    const {adminEmail } = req.user;

    const {email} = req.body;

   try {
        const user = await UserModel.findOne({adminEmail});
    
    
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }    

       
        const snapshot = await Snapshot.findOne({email});
 
        return res
        .status(200)
        .json(new ApiResponse(200, "Snapshot created", user, snapshot));
 
 
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(500, error.message));


    }

});







export {
    sendSnapshot,
    getSnapshot
}
