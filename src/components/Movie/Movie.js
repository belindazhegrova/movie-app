import React, { useEffect } from "react";
import "../Movie/Movie.css";
import { getAllMovie, searchMovie } from "../../Api/Requests";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carousel1 from "../Carousel/Carousel";

const Movie = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state?.movie);
  const successGetMovie = movies?.successGetMovie;
  console.log("successgetmovie", successGetMovie);

  useEffect(() => {
    dispatch(getAllMovie());
  }, []);

  const renderData = (data) => {
    const renderMovie = data?.map((movie) => {
      return (
        <div
          style={{
            height: "435px",
            width: "240px",
            paddingLeft: 10,
            paddingRight: 10,
          }}
          key={movie._id}
        >
          <div class="card" style={{ marginTop: "0px", width: "100%" }}>
            <img
              className="item"
              style={{ width: "100%", height: "340px", objectFit: "cover" }}
              src={movie?.img}
            />
            <div class="overlay">
              <div
                onClick={() =>
                  navigate("/movieDetails", {
                    state: { movie },
                  })
                }
                className="icon"
                title="play"
              >
                <i class="fa fa-play-circle"></i>
              </div>
            </div>
          </div>

          <p className="item">{movie?.title}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              justifyContent: "space-between",
            }}
          >
            <p className="item">director: {movie?.director}</p>
          </div>
        </div>
      );
    });
    return renderMovie;
  };

  const section = () => {
    return (
      <div>
        {successGetMovie.map((item) => {
          return (
            <div>
              <p style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
                {item.title}
              </p>
              <div className="moviesContainer"> {renderData(item.data)} </div>
            </div>
          );
        })}
        ;
      </div>
    );
  };

  return (
    <div>
      <Carousel1 />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <div>{section()}</div>
      </div>
    </div>
  );
};

export default Movie;
