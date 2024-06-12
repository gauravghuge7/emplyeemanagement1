import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";

import { JWT_SECRET } from "../constant.js";

const isUserLoggedIn = asyncHandler(async (req, res, next) => {

  
  // const userToken = req.cookies ? req.cookies.userToken : undefined;
  // const userToken = req.Cookies ? req.Cookies.userToken : req.Headers.userToken;


  console.log("frontend cookies => ", req.cookies);

  // const userToken = req.cookies?.userToken || req.headers.cookies.userToken;
  const userToken = req.cookies?.userToken || req.header("Authorization")?.replace("Bearer ", "")


  if (!userToken) {
    throw new ApiError(401, "User is Not logged in ");
  }

  try {
    const decoded = jwt.verify(userToken, JWT_SECRET);

    req.user = decoded;
    next();

  } 
  catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});

export { isUserLoggedIn };
