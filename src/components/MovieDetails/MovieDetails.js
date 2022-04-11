import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavMovie } from "../../actions/movieAction";
import "../MovieDetails/MovieDetails.css";
const MovieDetails = () => {
  const location = useLocation();
  const { movie } = location.state;
  const dispatch = useDispatch();

  const onHandleAddFavMovie = (movie) => {
    dispatch(addFavMovie(movie));
  };

  console.log("title", movie?.title);
  return (
    <div className="MovieDetails">
      <video className="video" controls width="90%" height="450">
        <source
          src="https://www.youtube.com/watch?v=RK8xHq6dfAo"
          type="video/webm"
        />
        <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      {/* <iframe
        className="video"
        width="90%"
        height="450"
        src="https://www.youtube.com/watch?v=RK8xHq6dfAo"
      ></iframe> */}

      <div className="div-title-duration">
        <p style={{ marginLeft: "20px", color: "white" }}>{movie?.title}</p>
        <p style={{ marginRight: "50px", color: "white" }}>
          {movie?.duration}min
        </p>
      </div>

      <p style={{ marginLeft: "20px", color: "white" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>

      <div className="div-button">
        <button
          className="button"
          onClick={() => onHandleAddFavMovie(movie?._id)}
        >
          <span>Add to List</span>
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
