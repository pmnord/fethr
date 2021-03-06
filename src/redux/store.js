import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

// import thunk from 'redux-thunk';
/* 
If redux-thunk middleware is enabled, any time you attempt to dispatch
a function instead of an object, the redux-thunk middleware will intercept the dispatch
and call the function with the dispatch method itself as the first argument, which
the function then uses as a callback when it finishes its async request.
*/

import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistStore };
