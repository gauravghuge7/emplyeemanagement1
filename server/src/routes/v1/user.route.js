import Router from 'express';
import { getUserProfile, loginUser, updateAvatar } from '../../controllers/v1/user.controllers.js';
import {upload} from '../../middlewares/multer.middleware.js';
import { isUserLoggedIn } from '../../middlewares/user.auth.middleware.js';



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






UserRouter.route("/getUserProfile").get(
    isUserLoggedIn,
    getUserProfile
)



export default UserRouter;