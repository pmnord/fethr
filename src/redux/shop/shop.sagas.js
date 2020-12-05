import { takeEvery } from 'redux-saga/effects';
// Listens for every action of type we pass to it
// Spawns a saga on each action dispatched to the Store that matches pattern.

// takeEvery creates a non-blocking call

import ShopActionTypes from './shop.types';

const { FETCH_COLLECTIONS_START } = ShopActionTypes;

export function* fetchCollectionsAsync() {
  yield console.log('I am fired');
}

export function* fetchCollectionsStart() {
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
