import dotenv from "dotenv";

import { app } from "./src/app.js";
import connectDB from "./src/db/db.js";
import UserRouter from "./src/routes/user.route.js";

dotenv.config({
  path: "./.env",
});


app.use('/user',UserRouter)

connectDB()
  .then(() => {
    app.listen(8000, () => {
      console.log(`⚙️ Server is running at port : 8000`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });