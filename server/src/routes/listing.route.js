import { Router } from "express";
import {  createListing, getAllListings, getMyListings } from "../controllers/listing.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";
const router = Router();

router.get("/", getAllListings);
router.post("/", checkAuth, createListing);
router.get("/mylistings", checkAuth, getMyListings);

export default router