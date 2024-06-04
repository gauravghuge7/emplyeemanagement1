import dotenv from "dotenv";
dotenv.config();
import { app } from "./src/app.js";
import connectDB from "./src/db/db.js";

export const PORT = +process.env.PORT || 8080;
const main = async(port) => {
    try {
        await connectDB();
        app.listen(port);
    } catch (err) {
        console.log("MONGO db connection failed !!! ", err);
    }
};

main(PORT)
    .then(() => {
        console.log(
            `⚙️ Server is running at port : ${PORT} \n Check Api Health at http://localhost:${PORT}/api/health`
        );
    })
    .catch((err) => {
        console.error(err);
    });