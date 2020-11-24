import { createSelector } from "reselect"; // Creates a memoized selector

const selectDirectory = (state) => state.directory; // Input selector

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
