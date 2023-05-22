import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount
} from "./../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create new tour
router.post("/",verifyAdmin, createTour);

//update  tour
router.put("/:id", verifyAdmin,updateTour);

//delete new tour
router.delete("/:id",verifyAdmin, deleteTour);

//get by id tour
router.get("/:id", getSingleTour);

//get all tour
router.get("/", getAllTour);

//search tour
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
