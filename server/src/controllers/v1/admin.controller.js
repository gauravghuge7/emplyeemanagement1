import { AdminModel, UserModel } from "../../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { SALT_ROUND, USER_ROLE } from "../../constant.js";
import { compareRole } from "../../utils/roleHelper.js";
import {
  checkArgsIfExists,
  checkIfStringArgsIsEmpty,
} from "../../utils/bodyHelper.js";

const cookieOptions = {
  maxAge: 1000 * 60 * 60 * 24,
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  domain: "localhost",
};

/**
 * Description: Registers A Admin
 *
 * body:
 *  firstName:
 *  lastName:
 *  email:
 *  password:
 *  confirmPassword:
 *
 */
const registerAdmin = asyncHandler(async (req, res, next) => {
  try {
    // Get Data From Req Body
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    // Vailidate Data
    checkArgsIfExists(firstName, lastName, email, password, confirmPassword);
    checkIfStringArgsIsEmpty(
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );
    if (confirmPassword !== password) {
      throw new ApiError(400, "Password Doesn't Match");
    }
    // Check For Conflict
    const existingUser = await AdminModel.findOne({ email });
    if (existingUser) {
      throw new ApiError("User already exists", 409);
    }
    // EncryptPassword
    const encryptedPassword = await bcrypt.hash(password, SALT_ROUND);
    // Admin Model Instance
    const user = await AdminModel.create({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
      Role: USER_ROLE.Admin,
    });

    //TODO: Implement Logger Module with File Logger --> Winston and Daily file
    console.log(user);

    // Save The Instance to Db
    await user.save();
    // Return Response
    return res
      .status(200)
      .json(new ApiResponse(200, "User created successfully", user));
  } 
  catch (err) {
    // Handle Error At Gobal Level
    next(err);
    return res.status(400).send(err.message);
  }
});

/**
 * Description: Sign in the User
 * Body:
 *  email:
 *  password:
 *  confirmPassword:
 */
const loginAdmin = asyncHandler(async (req, res, next) => {
  try {
    // Data from Req Body
    const { email, password } = req.body;

    // Validate data
    checkArgsIfExists(email, password);
    checkIfStringArgsIsEmpty(email, password);

    if (email.indexOf("@") === -1) {
      throw new ApiError(400, "Invalid email");
    }

    // Find User
    const user = await AdminModel.findOne({ email });

    // Handle If no user was
    if (!user) {
      throw new ApiError(401, "Email Wrong");
    }

    // compare password
    const comparePassword = await bcrypt.compare(password, user.password);

    // Handle Mismatch Password
    if (!comparePassword) {
      throw new ApiError(401, "Password Wrong");
    }

    const adminToken = await user.generateAdminToken();

    return res
      .status(200)
      .cookie("adminToken", adminToken, cookieOptions)
      .json(new ApiResponse(200, "User logged in successfully", user));
  } 
  catch (err) {
    next(err);
    return res.status(400).send(err.message);
  }
});

/**
 * Description: Change Password For the Admin User.
 * Body:-
 *  currentPassword
 *  newPassword
 *  confirmPassword
 */

const updatePassword = asyncHandler(async (req, res, next) => {
  try {
    // Data from Req Body
    const { newPassword, confirmPassword } = req.body;

    // Validate data
    checkArgsIfExists(newPassword, confirmPassword);
    checkIfStringArgsIsEmpty(newPassword, confirmPassword);

    if (!compareRole(req.user.role, USER_ROLE.Admin)) {
      throw new ApiError(401, "UnAuthorized Action");
    }

    if (newPassword !== confirmPassword) {
      throw new ApiError(400, "Confirm Password is Not Same as New Password");
    }

    // Find Admin User
    const user = await AdminModel.findOne({ email: req.user.email });

    // Handle user not Found
    if (!user) {
      throw new ApiError(404, "User Not Found");
    }

    // Create A Hash For Password
    const encryptedPassword = await bcrypt.hash(newPassword, SALT_ROUND);

    // Update Existing Model
    user.password = encryptedPassword;

    await user.save();

    return res.json(new ApiResponse(200, "Password Updated", user));
  } catch (err) {
    next(err);
  }
});

/**
 * Description : Log's out Admin
 */
const logoutAdmin = asyncHandler(async (req, res) => {
  const { adminToken } = req.cookies;

  try {
    return res
      .status(200)
      .clearCookie("adminToken", adminToken, cookieOptions)
      .json(new ApiResponse(200, "User logged out successfully"));
  } 
  catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});

/**
 * Description: Change Password For the Admin User.
 * Body:-
 */
const AdminUpdate = asyncHandler(async (req, res) => {
  // TODO: Complete This Code
});

const AdminDelete = asyncHandler(async (req, res) => {
  // TODO:
});

const getAdminDashboard = asyncHandler(async (req, res) => {
  // TODO: Complete This Code
});

const getAdminProfile = asyncHandler(async (req, res) => {
  
  const {adminEmail} = req.user;
  
  try {
    const user = await AdminModel.findOne({email: adminEmail});

    if (!user) {
      throw new ApiError("admin not registered", 404);
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Admin fetched successfully", user))
  }

  catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }

});


const registerUser = asyncHandler(async (req, res) => {
  
  const { firstName, lastName, email, password, phoneNumber } = req.body;

  const {adminEmail, adminId} = req.user;
  

  if(!firstName || !lastName || !email || !password || !phoneNumber) {
    throw new ApiError("Missing required fields", 400);
  }

 
  try {
    const exists = await UserModel.findOne({ email });

    if (exists) {
      return res.status(400).send("User already exist");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    
    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
      phoneNumber,
      adminId,
      adminEmail
      


    });

    await user.save();


    if (!user) {
      throw new ApiError("problem in registering user", 404);
    }

    const send = {
      user,
      employeeId: user._id,
      
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "User created successfully", send));

  } 
  
  catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
});



const deleteUser = asyncHandler(async (req, res) => {

  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new ApiError("User not registered", 404);
    }

    await user.remove();

    return res
      .status(200)
      .json(new ApiResponse(200, "User deleted successfully"));
  } 
  catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});


const getUsers = asyncHandler(async (req, res) => {

  const {adminEmail} = req.user;

  try {

    const users = await UserModel.find({adminEmail});


    return res
      .status(200)
      .json(new ApiResponse(200, "Users fetched successfully", users));
  } 
  catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});

const getDailyReport = asyncHandler(async (req, res) => {
  const {adminEmail} = req.user;

  const email = req.body.email;

  try {
    const user = await UserModel.find({adminEmail});

    if (!user) {
      throw new ApiError("admin not registered", 404);
    }

    

    await user.save();

    return res
      .status(200)
      .json(new ApiResponse(200, "Daily Report fetched successfully", user))

  } 
  catch (error) {
      console.log(error);
      return res.status(400).send(error.message);
  }

})



 
export {
  getUsers,
  getAdminProfile,
  registerAdmin,
  deleteUser,
  getDailyReport,

  loginAdmin,
  logoutAdmin,
  registerUser,
  updatePassword,
  AdminUpdate,
  AdminDelete,
  getAdminDashboard,
  


}
