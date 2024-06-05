import express from "express";
import multer from "multer";
const AdminRouter = express.Router();

const upload = multer();

import { V1Controllers } from "../../controllers/index.js";

// Admin Routes

AdminRouter.route("/registerAdmin").post(
    upload.none(),
    V1Controllers.registerAdmin
);

AdminRouter.route("/login").post(V1Controllers.AdminLogin);

AdminRouter.route("/logout").post(V1Controllers.AdminLogout);

// FIXME: Update Request Are Patch Request
AdminRouter.route("/update").post(V1Controllers.AdminUpdate);

// FIXME: Update Request Are Delete Request
AdminRouter.route("/delete").post(V1Controllers.AdminDelete);

// User Routes accessing by admin

AdminRouter.route("/registerUser").post(V1Controllers.registerUser);

AdminRouter.route("/getUsers").get(V1Controllers.getUsers);

export default AdminRouter;