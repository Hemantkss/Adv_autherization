import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/authController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// check auth
router.get("/check-auth", verifyToken, checkAuth);


// signup, login and logout
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// email verification and password reset
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
