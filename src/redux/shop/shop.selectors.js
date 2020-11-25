import { createSelector } from "reselect";
import { memoize } from "lodash.memoize";

const COLLECTION_ID_MAP = {
  // Map the string value to the id
  soft: 1,
  regal: 2,
  bold: 3,
  sophisticated: 4,
  shabbychic: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

/* Because collectionUrlParam is passed in dynamically, 
a new instance of selectCollection is called and is not memoized.

In order to memoize it, we have to memoize the entire function with lodash.memoize */
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
