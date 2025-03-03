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

const getMovieBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await MovieServices.getMovieBySlug(slug);
    res.json({
      success: true,
      message: "Single movie found",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const MovieControllers = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
};
