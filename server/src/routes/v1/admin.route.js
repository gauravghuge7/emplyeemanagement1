import express from "express";
import multer from "multer";
const AdminRouter = express.Router();

const upload = multer();

import { V1Controllers } from "../../controllers/index.js";
import { isLoggedIn } from "../../middlewares/auth.middlewares.js";

// Admin Routes

AdminRouter.route("/registerAdmin").post(
  upload.none(),
  V1Controllers.registerAdmin
);

AdminRouter.route("/login").post(V1Controllers.loginAdmin);
AdminRouter.route("/updatePassword").patch(
  isLoggedIn,
  V1Controllers.updatePassword
);

AdminRouter.route("/logout").post(V1Controllers.logoutAdmin);

// // FIXME: Update Request Are Patch Request
// AdminRouter.route("/update").post(V1Controllers.AdminUpdate);

// // FIXME: Update Request Are Delete Request
// AdminRouter.route("/delete").post(V1Controllers.AdminDelete);

// // User Routes accessing by admin

// AdminRouter.route("/registerUser").post(V1Controllers.registerUser);

// AdminRouter.route("/getUsers").get(V1Controllers.getUsers);

export default AdminRouter;
