import { Router } from "express";

import { healthCheck } from "../controllers/index.js";

import V1Router from "./v1/index.js";

const ApiRouter = Router();

ApiRouter.use("/v1", V1Router);

ApiRouter.route("/health").get(healthCheck);

export default ApiRouter;