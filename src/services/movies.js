import { movies } from "../db/movies.js"

const getAllMovies = () => {
  return movies
}

const getMovieById = (id) => {
  return movies.find((movie) => movie.id === id)
}

export const moviesService = {
  getAllMovies,
  getMovieById,
}
