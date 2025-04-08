import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favouriteSlice.jsx";

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

export default store;
