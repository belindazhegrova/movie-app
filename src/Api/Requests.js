import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
} from "../actions/profileAction";

import {
  getMovieSuccess,
  getMovieError,
  searchMovieSuccess,
  searchMovieError,
  unformated,
} from "../actions/movieAction";

const axios = require("axios");

export const login = (email, password) => {
  const request = {
    credentials: {
      email,
      password,
    },
  };
  return (dispatch) => {
    axios
      .post("http://localhost:4000/api/auth", request)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);
        // console.log("token", response.data.token);
        console.log("responselogin", response);
        dispatch(loginSuccess(response));
      })
      .catch((error) => {
        // console.log("error", error);

        dispatch(loginError(error));
      });
  };
};
export const register = (email, password, confirmPassword) => {
  const request = {
    user: {
      email,
      password,
      passwordConfirmation: confirmPassword,
    },
  };
  return (dispatch) => {
    axios
      .post("http://localhost:4000/api/users", request)
      .then((response) => {
        // console.log("response", response);
        dispatch(registerSuccess(response));
      })
      .catch((error) => {
        // console.log("error", error);

        dispatch(registerError(error));
      });
  };
};

export const getAllMovie = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:4000/api/authfilms")
      .then((response) => {
        console.log("responsemovie", response);
        let films = [...response.data.films];
        dispatch(unformated(films));

        const category = ["Action", "Comedy", "Horror"];
        films.map((item, index) => {
          const rand = parseInt(0 + Math.random() * (2 - 0));

          films[index] = { ...item, category: category[rand] };
        });
        console.log("films", films);

        let section = [];
        category.map((item) => {
          const data = films.filter((film) => film.category === item);
          if (data.length > 0) {
            section.push({
              title: item,
              data: films.filter((film) => film.category === item),
            });
          }
        });

        dispatch(getMovieSuccess(section));
      })
      .catch((error) => {
        console.log("error", error);

        dispatch(getMovieError(error));
      });
  };
};
