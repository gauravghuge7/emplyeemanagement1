import { UserModel } from "../../models/index.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";


import { LeaveModel } from "../../models/Leave.model.js";
import { TaskModel } from "../../models/task.model.js";

const cookiesOptions = {

    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,

}



const acceptLeaveApplication = asyncHandler(async(req, res) => {

    const {email} = req.user;

    try {
        const {fullName, employeeId, department, date, reason,  explainAboutLeave} = req.body;
    
        const user = await UserModel.findOne({email});
    
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }
    
        // uncomment this code after the testing is done because the we recommend the use employeeId
        // if (user.employeeId !== employeeId) {
        //     return res.status(400).json({
        //         message: "Invalid employee id"
        //     });
        // }
    
        const leave = new LeaveModel({
            fullName,
            employeeId,
            email,
            reason,
            date,
            department,
            explainAboutLeave,
            leaveStatus: "pending"
        });
    
        await leave.save();
    
    
        return res
        .json(new ApiResponse(
            200,
            "Leave application accepted with status pending",
            leave
        ));
    
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



const addTask = asyncHandler(async(req, res) =>{

    const {email} = req.user;

    try {
    
        const {project, title, description, department} = req.body;

        const user = await UserModel.findOne({email});

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const task = new TaskModel({
            email,
            project,
            title,
            description,
            department
        });

        await task.save();

        return res
        .json(new ApiResponse(
            200,
            "Task added successfully",
            task
        ));
        
    } 
    
    catch (error) {
        
        return res
        .status(500)
        .json({
            message: error.message
        });
    }

 });


export {
    acceptLeaveApplication,
    addTask
}