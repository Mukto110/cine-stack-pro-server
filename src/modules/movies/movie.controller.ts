import { Request, Response } from "express";
import { MovieServices } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.createMovie(movieData);
  res.json({
    success: true,
    message: "Movie is created successfully !",
    data: result,
  });
};

const getAllMovies = async (req: Request, res: Response) => {
  const result = await MovieServices.getAllMovies();
  res.json({
    success: true,
    message: "Successfully retrieve all student data",
    data: result,
  });
};

export const MovieControllers = {
  createMovie,
  getAllMovies,
};
