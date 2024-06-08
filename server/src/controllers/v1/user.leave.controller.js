import { UserModel } from "../../models/index.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

import { LeaveModel } from "../../models/Leave.model.js";

const cookiesOptions = {

    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,

}



const acceptLeaveApplication = asyncHandler(async(req, res) => {

    const {email, id} = req.user;

    try {
        const {fullName, employeeId, reason, date, department, explainAboutLeave} = req.body;
    
        const user = await UserModel.findOne({email});
    
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }
    
        if (user.employeeId !== employeeId) {
            return res.status(400).json({
                message: "Invalid employee id"
            });
        }
    
        const leave = new LeaveModel({
            fullName,
            employeeId: id,
            email,
            reason,
            date,
            department,
            explainAboutLeave
        });
    
        await leave.save();
    
        const status = leave.leaveStatus;
    
        return res
        .status(200)
        .json(new ApiResponse({
            message: "Leave application accepted",
            data: status
        }));
    
    } 
    catch (error) {
        console.log(error);
        return res
        .status(500)
        .json({
            message: "Internal server error"
        });
    }
});



export {
    acceptLeaveApplication
}