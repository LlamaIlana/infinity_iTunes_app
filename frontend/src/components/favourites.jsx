import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourites } from "./Redux/favouriteSlice.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./favourites.css";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  const handleRemoveFromFavourites = (collectionId) => {
    dispatch(removeFromFavourites(collectionId));
  };

  return (
    <div className="favorites-page">
      <h2>Your Favourites</h2>
      <div className="favorites-list">
        {favourites.length === 0 ? (
          <p className="no-fav-text">No favourites added yet.</p>
        ) : (
          favourites.map((item) => (
            <div
              className="card"
              style={{ width: "18rem" }}
              key={item.collectionId}>
              <img
                src={item.artworkUrl100}
                alt={item.artistName}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{item.artistName}</h5>
                <p className="card-text">{item.collectionCensoredName}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    console.log(
                      "Clicked item collectionId:",
                      item.collectionId
                    );
                    handleRemoveFromFavourites(item.collectionId);
                  }}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
