import React, { useState, useEffect } from "react";
import { getAllMovie, searchMovie } from "../../Api/Requests";
import { getMovieSuccess } from "../../actions/movieAction";
import "../SearchBar/SearchBar.css";
import { Search } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state?.movie);
  const successGetMovie = movies?.successGetMovie;

  const handleSearchMovie = () => {
    if (title === "") {
      dispatch(getAllMovie());
    } else {
      searchMovie();
    }
  };

  const searchMovie = () => {
    let array = [...successGetMovie];
    array.map((i, index) => {
      const results = i.data.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
      );
      array[index].data = [...results];
    });

    dispatch(getMovieSuccess(array));
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  return (
    <div className="searchContainer">
      <div className="search-bar">
        <input
          type="text"
          placeholder="search.."
          name="term"
          value={title}
          onChange={handleOnChange}
        />
        <Search
          onClick={handleSearchMovie}
          role="button"
          style={{ color: "#a9a9a9", right: "10px", position: "absolute" }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
