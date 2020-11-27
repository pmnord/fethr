import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { compose } from "redux";
import { persistStore } from "redux-persist";

const middlewares = process.env.NODE_ENV === "development" ? [logger] : [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);

export default { store, persistor };
