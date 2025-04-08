import { createSlice } from "@reduxjs/toolkit";

const loadFavourites = () => {
  try {
    const storedData = localStorage.getItem("myLocalStore");
    const parsedData = storedData ? JSON.parse(storedData) : [];
    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    return [];
  }
};

const saveFavourites = (favourites) => {
  localStorage.setItem("myLocalStore", JSON.stringify(favourites));
};

// Load favourites from localStorage initially
const initialState = {
  favourites: loadFavourites(),
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      if (
        !state.favourites.some(
          (item) => item.collectionId === action.payload.collectionId
        )
      ) {
        const updatedFavourites = [...state.favourites, action.payload];
        state.favourites = updatedFavourites;
        saveFavourites(updatedFavourites);
      }
    },
    removeFromFavourites: (state, action) => {
      console.log("Removing item with collectionId:", action.payload);
      console.log("Current favourites:", state.favourites);

      const updatedFavourites = state.favourites.filter(
        (item) => item.collectionId !== action.payload
      );

      console.log("Updated favourites:", updatedFavourites);
      state.favourites = updatedFavourites;
      saveFavourites(updatedFavourites);
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
