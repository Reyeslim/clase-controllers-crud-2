import { movies } from "../db/movies.js"

const getAllMovies = () => {
  return movies
}

const getMovieById = (id) => {
  return movies.find((movie) => movie.id === id)
}

const createMovie = (data) => {
  // data es la info que nos llega del body
  const newMovie = {
    id: Date.now(), // Simulación rudimentaria de ID único
    ...data, // me traigo toda la info que ya tenía data
  }
  movies.push(newMovie) // añado al array
  return newMovie // devuelvo el elemento creado
}

const updateMovie = (id, data) => {
  const movieIndex = movies.findIndex((movie) => movie.id === id)

  if (movieIndex === -1) {
    return null
  }

  movies[movieIndex] = {
    ...movies[movieIndex], // las propiedades antiguas de la película
    ...data, // las propiedades nuevas
  }

  return movies[movieIndex]
}

const deleteMovie = (id) => {
  const movieIndex = movies.findIndex((movie) => movie.id === id)

  if (movieIndex === -1) {
    return false
  }

  movies.splice(movieIndex, 1)
  return true
}

export const moviesService = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
}
