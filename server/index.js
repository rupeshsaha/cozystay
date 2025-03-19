import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './db.js';
import cookieParser from 'cookie-parser';


dotenv.config();
dbConnect()

const app = express();
app.use(cors({
    origin: process.env.CLIENT,
    credentials: true
}));
app.use(cookieParser())
app.use(express.json())

//Routes
import authRoutes from "./src/routes/auth.route.js"
import listingRoutes from "./src/routes/listing.route.js"
import bookingRoutes from "./src/routes/booking.route.js"

app.use("/auth", authRoutes)
app.use("/listing", listingRoutes)
app.use("/book", bookingRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})