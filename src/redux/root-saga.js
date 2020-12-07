import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}

// all takes an array of sagas and enables them to be called concurrently

// why do we use call() ?
