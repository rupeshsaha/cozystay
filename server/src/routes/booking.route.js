import { Router } from "express";
import { createBooking, getAllBookings } from "../controllers/booking.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", checkAuth, createBooking)
router.get("/", checkAuth, getAllBookings)

export default router;