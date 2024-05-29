import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";




const isLogined = asyncHandler (async (req, res, next) => {

    const {adminToken} = req.cookies?.adminToken;

    if(!adminToken){
        throw new ApiError("Not logged in", 401);
    }


    try {

        const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } 
    
    catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
        
    }

})

export {
    isLogined
}