import { createSelector } from "reselect";

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

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
