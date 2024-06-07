import express from "express";
import { V1Controllers } from "../../controllers/index.js";
import { upload } from "../../middlewares/multer.middleware.js";
import { registerUser } from "../../controllers/v1/admin.controller.js";

///  Admin Router 
const AdminRouter = express.Router();




// Admin Routes

AdminRouter.route("/registerAdmin").post(
  upload.none(),
  V1Controllers.registerAdmin
);

AdminRouter.route("/login").post( 

  upload.none(),
  V1Controllers.loginAdmin

);

// AdminRouter.route("/updatePassword").patch(
//   isLoggedIn,
//   V1Controllers.updatePassword
// );

AdminRouter.route("/logout").post(V1Controllers.logoutAdmin);

// // FIXME: Update Request Are Patch Request
// AdminRouter.route("/update").post(V1Controllers.AdminUpdate);

// // FIXME: Update Request Are Delete Request
// AdminRouter.route("/delete").post(V1Controllers.AdminDelete);




// User Routes accessing by admin



AdminRouter.route("/registerUser").post(
  upload.none(),
  registerUser
)


export default AdminRouter;
