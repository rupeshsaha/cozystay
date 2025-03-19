import { Router } from "express";
import {  createListing, getAllListings } from "../controllers/listing.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";
const router = Router();

router.get("/", getAllListings);
router.post("/", checkAuth, createListing);

export default router