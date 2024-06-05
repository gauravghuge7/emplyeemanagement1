import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import ApiRouter from "./routes/index.js";

// accept json and form data
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable cross origin requests
app.use(cors());

// for recieving cookies
app.use(cookieParser());

app.use("/api", ApiRouter);

// TODO: Create Centralized Error Handler

export { app };