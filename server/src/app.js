import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import ApiRouter from "./routes/index.js";
import { healthCheck } from "./controllers/health.controller.js";

// accept json and form data
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable cross origin requests
app.use(cors(
  {
    origin: 'http://localhost:5173' || '*',
    credentials: true,
  }
));

// for receiving cookies
app.use(cookieParser());

app.use("/", healthCheck);


app.use("/api", ApiRouter);






app.use((err, req, res, next) => {
  res.status(err.status || 400).json({
    error: {
      message: err.message,
    },
  });
});

export { app };
