import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../actions/profileAction";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../actions/movieAction";
const Switcher = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenInStorage = localStorage.getItem("token");
  const cartInStorage = localStorage.getItem("cart");
  const movies = useSelector((state) => state?.movie);
  const cart = movies?.cart;

  useEffect(() => {
    if (!tokenInStorage) {
      return;
    }

    dispatch(loginSuccess({ data: { token: tokenInStorage } }));
    navigate("/");
  }, [tokenInStorage]);

  // useEffect(() => {
  //   if (!cartInStorage) {
  //     return;
  //   }
  //   dispatch(setCart(JSON.parse(cartInStorage)));
  // }, [cartInStorage]);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return null;
};

export default Switcher;
