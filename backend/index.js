import dns from 'node:dns/promises';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

dotenv.config() // call this FIRST, before anything else

const app = express()
const PORT = process.env.PORT || 5000

connectDB() // call outside app.listen

app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`)
})