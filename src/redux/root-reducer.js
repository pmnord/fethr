import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer.js";
import { persistReducer } from "redux-persist"; // Wraps our root reducer to provide persistence
import storage from "redux-persist/lib/storage"; // Tells redux-persist to use localStorage

const persistConfig = {
  key: "root", // Where in reducer to start reducing from
  storage,
  whitelist: ["cart"], // String names of reducers to store
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
