import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favouriteSlice.js";

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

export default store;
