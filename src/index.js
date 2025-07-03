import dotenv from "dotenv"
import connectDB from "./db/ConnectDb.js";

dotenv.config({
    path:'./env' // experimental feature thi solve thay
})
connectDB()