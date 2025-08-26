import dotenv from "dotenv"
import connectDB from "./db/ConnectDb.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env' // experimental feature thi solve thay
})

const port = process.env.PORT || 8000;
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(port, () => {
            console.log(`server is running at port : ${port}`);
        })
    })
    .catch((err) => {
        console.log("MONGODB connection failed !", err)
    })
