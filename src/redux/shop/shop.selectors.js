import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

/* Because collectionUrlParam is passed in dynamically, 
a new instance of selectCollection is called and is not memoized.

In order to memoize it, we have to memoize the entire function with lodash.memoize */
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
