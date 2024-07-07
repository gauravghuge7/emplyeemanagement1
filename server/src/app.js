import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan"

import ApiRouter from "./routes/index.js";
import { healthCheck } from "./controllers/health.controller.js";

// accept json and form data
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ClientUrl = 'https://emplyeemanagement1.vercel.app/' || 'http://localhost:5173';

// enable cross origin requests
app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true,
  }
));

// app.use(cors());



// for receiving cookies
app.use(cookieParser());



app.use("/api", ApiRouter);


app.use("/health", healthCheck);





export { app };
