import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from '../../firebase/firebase.utils';

import { signInSuccess, signInFailure } from './user.actions';

import UserActionTypes from './user.types';

const { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } = UserActionTypes;

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {}

export function* signInWithGoogle() {
  const { user } = yield auth.signInWithPopup(googleProvider);
  yield getSnapshotFromUserAuth(user);
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  // onEmailSignInStart will pass the action with the payload to this function after it hits the reducer
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  yield getSnapshotFromUserAuth(user);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
