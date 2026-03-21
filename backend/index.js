import dns from 'node:dns/promises';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoute from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
dotenv.config() // call this FIRST, before anything else


const app = express()
const PORT = process.env.PORT || 5000
//middleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/api/v1/user", userRoute)
//http://localhost:8000/api/user/register

connectDB() // call outside app.listen

app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`)
})