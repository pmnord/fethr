import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
/* 
  If redux-thunk middleware is enabled, any time you attempt to dispatch
  a function instead of an object, the redux-thunk middleware will intercept the dispatch
  and call the function with the dispatch method itself as the first argument, which
  the function then uses as a callback when it finishes its async request.
*/

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);
export default { store, persistStore };
