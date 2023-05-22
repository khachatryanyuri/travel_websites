import express from "express";
import { createReviews } from "../controllers/reviewsControllers.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:tourId", verifyUser, createReviews);

export default router;
