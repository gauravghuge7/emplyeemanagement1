import express from 'express';

const AdminRouter = express.Router();
import multer from 'multer';

const upload = multer();

import { 
    AdminDelete, 
    AdminLogin, 
    AdminLogout, 
    AdminUpdate, 
    getUsers, 
    registerAdmin,
    registerUser
    
} from '../controllers/admin.controller.js';



// Admin Routes

AdminRouter.route("/registerAdmin")
.post(
    upload.none(),
    registerAdmin
    
)


AdminRouter.route("/login")
.post(
    AdminLogin
);




AdminRouter.route("/logout")
.post(
    AdminLogout
)


AdminRouter.route("/update")
.post(
    AdminUpdate
)

AdminRouter.route("/delete")
.post(
    AdminDelete
)



// User Routes accessing by admin

    
AdminRouter.route("/registerUser")
.post(
    registerUser
)




AdminRouter.route("/getUsers")
.get(
    getUsers
)


    
export default AdminRouter;