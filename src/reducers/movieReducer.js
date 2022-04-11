import { act } from "react-dom/test-utils";
import {
  SET_MOVIE_FROM_API_SUCCESS,
  SET_MOVIE_FROM_API_ERROR,
  ADD_FAV_MOVIE,
  REMOVE_FAV_MOVIE,
  ADJUST_QTY,
  UNFORMATED,
  SET_CART,
} from "../actions/movieAction";

const initialState = {
  successGetMovie: [],
  errorGetMovie: null,
  cart: [],
  successSearch: [],
  errorSearch: null,
  unFormatedMovies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_FROM_API_SUCCESS: {
      return { ...state, successGetMovie: action?.movieFromApi };
    }
    case SET_MOVIE_FROM_API_ERROR: {
      return { ...state, errorGetMovie: action?.errorMovieapi };
    }
    case ADD_FAV_MOVIE: {
      //get the items data from the successGetMOvie array
      const movie = state.unFormatedMovies.find(
        (movie) => movie._id === action?.addMovie
      );
      // console.log("movieees", movies);
      //check if item is in cart already
      const inCart = state.cart.find((item) =>
        item._id === action?.addMovie ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item._id === action?.addMovie
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...movie, qty: 1 }],
      };
    }

    case REMOVE_FAV_MOVIE: {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action?.removeMovie),
      };
    }
    case ADJUST_QTY: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action?.id ? { ...item, qty: +action?.qty } : item
        ),
      };
    }
    case UNFORMATED: {
      return {
        ...state,
        unFormatedMovies: action?.unformated,
      };
    }
    case SET_CART: {
      return { ...state, cart: action?.setcart };
    }

    default: {
      return state;
    }
  }
};

export default movieReducer;
