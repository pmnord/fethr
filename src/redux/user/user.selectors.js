import { createSelector } from "reselect";

const selectUser = (state) => state.user; // Input selector. One layer deep usually.

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
