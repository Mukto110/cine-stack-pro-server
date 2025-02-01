import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovie = async (payLoad: TMovie) => {
  const result = await Movie.create(payLoad);
  return result;
};

const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

const getMovieById = async (id: string) => {
  return await Movie.findById(id);
};

export const MovieServices = {
  createMovie,
  getAllMovies,
  getMovieById,
};
