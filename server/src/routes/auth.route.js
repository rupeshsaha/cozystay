import { Router } from "express";
import { getLoggedInUser, loginUser, logoutUser, registerUser } from "../controllers/auth.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", checkAuth,  logoutUser)
router.get("/", checkAuth, getLoggedInUser);

export default router