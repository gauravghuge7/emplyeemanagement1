import Router from 'express';
import { loginUser } from '../../controllers/v1/user.controllers.js';
import {upload} from '../../middlewares/multer.middleware.js';



const UserRouter = Router();




UserRouter.route("/login")

    .post (

        upload.none(),
        loginUser


    ) 






export default UserRouter;