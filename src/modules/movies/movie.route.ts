import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.get("/", MovieControllers.getAllMovies);
router.get("/:movieId", MovieControllers.getMovieById);
router.post("/", MovieControllers.createMovie);

export const MovieRoutes = router;
