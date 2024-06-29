import Router from 'express';
import { acceptDailyReport, getDailyReportByDate, getLeaveHistory, getUserProfile, loginUser, logoutUser, updateAvatar, updateProfile } from '../../controllers/v1/user.controllers.js';
import {upload} from '../../middlewares/multer.middleware.js';
import { isUserLoggedIn } from '../../middlewares/user.auth.middleware.js';
import { acceptLeaveApplication, addTask } from '../../controllers/v1/user.leave.controller.js';
import { sendSnapshot } from '../../controllers/v1/snapshot.controller.js';



const UserRouter = Router();




UserRouter.route("/login").post (

    upload.none(),
    loginUser

)


UserRouter.route("/uploadAvatar").post (

    isUserLoggedIn,
    upload.single("avatar"),
    updateAvatar

) 



UserRouter.route("/updateProfile").post(

    isUserLoggedIn,
    upload.single("avatar"),
    updateProfile

)

UserRouter.route("/leaveApplication").post (

    isUserLoggedIn,
    upload.none(),
    acceptLeaveApplication

) 


UserRouter.route("/addTask").post (

    isUserLoggedIn,
    upload.none(),
    addTask

) 


UserRouter.route("/dailyReport").post (
    isUserLoggedIn,
    upload.none(),
    acceptDailyReport
)



UserRouter.route("/sendSnapshot").post (

    isUserLoggedIn,
    upload.single("photo"),
    sendSnapshot
)



UserRouter.route("/getDailyReport").post(

    isUserLoggedIn,
    upload.none(),
    getDailyReportByDate
)









UserRouter.route("/getUserProfile").get(
    isUserLoggedIn,
    getUserProfile
)


UserRouter.route("/getLeaveHistory").get(
    isUserLoggedIn,
    getLeaveHistory
)


UserRouter.route("/logout").post(
    isUserLoggedIn,
    logoutUser
)


export default UserRouter;

