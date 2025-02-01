import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
import { format } from "date-fns";
import slugify from "slugify";

const createMovie = async (payLoad: TMovie) => {
  // create slug -->
  const date = format(new Date(payLoad.releaseDate), "dd-MM-yyyy");

  const slug = slugify(`${payLoad.title}-${date}`, {
    lower: true,
    strict: true,
    trim: true,
  });

  const result = await Movie.create({ ...payLoad, slug });
  return result;
};

const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

const getMovieBySlug = async (slug: string) => {
  return await Movie.findOne({ slug: slug });
};

export const MovieServices = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
};
