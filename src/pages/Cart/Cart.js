import React, { useState, useEffect } from "react";
import "../Cart/Cart.css";

import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../../Api/Requests";
import { removeFavMovie, adjustQty } from "../../actions/movieAction";
import { Trash } from "react-feather";

const Cart = () => {
  const [input, setInput] = useState(1);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state?.movie);
  const cart = movies?.cart;

  useEffect(() => {
    dispatch(getAllMovie());
  }, []);

  const onHandleRemoveMovie = (movie) => {
    dispatch(removeFavMovie(movie));
  };

  const renderMovie = cart?.map((movie) => {
    const onHandleAdjustQuanity = (id, value) => {
      dispatch(adjustQty(id, value));
    };

    const onChangeHandler = (event) => {
      event.preventDefault();
      setInput(event.target.value);
      onHandleAdjustQuanity(movie?._id, event.target.value);
    };
    return (
      <div
        style={{
          height: "435px",
          width: "240px",
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: "25px",
        }}
        className="Cart"
        key={movie._id}
      >
        <div class="card" style={{ marginTop: "0px", width: "100%" }}>
          <img
            className="item"
            style={{ width: "100%", height: "340px", objectFit: "cover" }}
            src={movie?.img}
          />
        </div>

        <p className="item">{movie?.title}</p>

        <p className="item">Director: {movie?.director}</p>
        <div>
          <span style={{ color: "white" }}>Quantity</span>
          <input
            style={{
              width: "18%",
              borderRadius: "10px",
              textAlign: "center",
            }}
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={movie?.qty}
            onChange={onChangeHandler}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Trash
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onHandleRemoveMovie(movie?._id)}
          >
            Delete Item{" "}
          </Trash>
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      {cart.length === 0 && (
        <span
          style={{
            marginTop: "30px",
            color: "white",
          }}
        >
          Cart is empty
        </span>
      )}
      <div className="moviesContainer">{renderMovie}</div>
    </div>
  );
};

export default Cart;
