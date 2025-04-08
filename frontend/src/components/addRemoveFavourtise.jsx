import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "./Redux/favouriteSlice.js";

const AddRemoveFavourites = ({ item }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  const isFavorite = favourites.some((favItem) => favItem.id === item.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavourites(item.id));
    } else {
      dispatch(addToFavourites(item));
    }
  };

  return (
    <button onClick={handleToggleFavorite}>
      {isFavorite ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  );
};

export default AddRemoveFavourites;
