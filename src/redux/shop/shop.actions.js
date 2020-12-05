import ShopActionTypes from './shop.types';

const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} = ShopActionTypes;

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// REFACTORED INTO A SAGA
/* 
  If redux-thunk middleware is enabled, any time you attempt to dispatch
  a function instead of an object the middleware will call that function with
  the dispatch method itself as the first argument.
*/
// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart());
//     console.log(collectionRef);

//     collectionRef
//       .get()
//       .then((snapshot) => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((error) => dispatch(fetchCollectionsFailure(error)));
//   };
// };
