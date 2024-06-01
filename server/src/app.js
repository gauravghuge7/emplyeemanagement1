import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// accept json and form data
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// enable cross origin requests
app.use(cors());


// for recieving cookies
app.use(cookieParser());


// user routes
// import UserRouter from './routes/user.js';

// app.use('/user',UserRouter)



// admin routes

import AdminRouter from './routes/admin.route.js';

app.use('/admin',AdminRouter)










export { app };
