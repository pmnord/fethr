import {
  // takeEvery, // takeEvery creates a non-blocking call (of which there can be many)
  takeLatest, // spawns a saga on the latest action and cancels previous ones
  call, // Call is the effect inside our generator function that invokes a method
  put, // Sagas do not dispatch actions using the dispatch method instead, they use `put`
} from 'redux-saga/effects';
// Listens for every action of type we pass to it
// Spawns a saga on each action dispatched to the Store that matches pattern.

// We are also able to cancel any of the tasks
// coming out of our sagas in our saga middleware

// At every yield, we're yielding control over the saga back to the redux-saga middleware

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

const { FETCH_COLLECTIONS_START } = ShopActionTypes;

export function* fetchCollectionsAsync() {
  yield console.log('Saga fetchCollectionsAsync was fired');

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // Call is the effect inside our generator function that invokes the method
    // Call takes a function as first argument, all other args are passed into that function
    // We want to yield it in case the call takes longer than we expected
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    // Sagas do not dispatch actions using the dispatch method
    // instead, they use `put`
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
  // Spawns a saga on each action dispatched to the Store that matches pattern
}
