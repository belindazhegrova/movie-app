import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./rootReducer";

const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default Store;
