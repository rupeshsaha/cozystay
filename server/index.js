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

app.get("/set-cookie", (req, res) => {
  res.cookie("thirdPartyCookie", "enabled", {
    httpOnly: true, 
    secure: true, 
    sameSite: "None", 
    domain: "https://cozystay-l0p6.onrender.com", 
    maxAge: 7 * 24 * 60 * 60 * 1000, 
  });

  res.status(200).json({ message: "Cookie set successfully!" });
});

app.use("/auth", authRoutes)
app.use("/listing", listingRoutes)
app.use("/book", bookingRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})