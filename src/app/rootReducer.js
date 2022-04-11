import { combineReducers } from "redux";
import profileReducer from "../reducers/profileReducer";
import movieReducer from "../reducers/movieReducer";
const rootReducer = combineReducers({
  profile: profileReducer,
  movie: movieReducer,
});

export default rootReducer;
