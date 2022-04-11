export const SET_MOVIE_FROM_API_SUCCESS = "SET_MOVIE_FROM_API_SUCCESS";
export const SET_MOVIE_FROM_API_ERROR = "SET_MOVIE_FROM_API_ERROR";
export const ADD_FAV_MOVIE = "ADD_FAV_MOVIE";
export const REMOVE_FAV_MOVIE = "REMOVE_FAV_MOVIE";
export const ADJUST_QTY = "ADJUST_QTY";
export const GET_MOVIE_SEARCH = "GET_MOVIE_SEARCH";
export const ERROR_MOVIE_SEARCH = "ERROR_MOVIE_SEARCH";
export const UNFORMATED = "UNFORMATED";
export const SET_CART = "SET_CART";

export const getMovieSuccess = (movie) => {
  return {
    type: SET_MOVIE_FROM_API_SUCCESS,
    movieFromApi: movie,
  };
};
export const getMovieError = (error) => {
  return {
    type: SET_MOVIE_FROM_API_ERROR,
    errorMovieapi: error,
  };
};
export const addFavMovie = (movie) => {
  return {
    type: ADD_FAV_MOVIE,
    addMovie: movie,
  };
};
export const removeFavMovie = (movie) => {
  return {
    type: REMOVE_FAV_MOVIE,
    removeMovie: movie,
  };
};

export const adjustQty = (movieId, value) => {
  return {
    type: ADJUST_QTY,
    id: movieId,
    qty: value,
  };
};
export const unformated = (movie) => {
  return {
    type: UNFORMATED,
    unformated: movie,
  };
};
export const setCart = (movies) => {
  return {
    type: SET_CART,
    setcart: movies,
  };
};
