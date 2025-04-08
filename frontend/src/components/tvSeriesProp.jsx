import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToFavourites } from "./Redux/favouriteSlice";

const TVSeriesList = (props) => {
  const dispatch = useDispatch();

  const [showPopup, setShowPopup] = useState(false);

  const addToFavourtise = (tvSeries) => {
    dispatch(addToFavourites(tvSeries));
  };

  const handleAddToFavourites = (tvSeries) => {
    // Show the pop-up
    setShowPopup(true);
    // Hide the pop-up after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
    // Add to favourites
    addToFavourtise(tvSeries);
  };

  return (
    <div className="music-list-container">
      <div className="container">
        <div className="row">
          {props.tvSeries.map((tvSeries, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card">
                <img
                  src={tvSeries.artworkUrl100}
                  className="card-img-top"
                  alt="Album Art"
                />
                <div className="card-body">
                  <h5 className="card-title">{tvSeries.artistName}</h5>
                  <p className="card-text">{tvSeries.collectionCensoredName}</p>
                  <p className="card-text">
                    {new Date(tvSeries.releaseDate).toLocaleDateString()}
                  </p>
                  <button
                    className="btn"
                    onClick={() => handleAddToFavourites(tvSeries)}>
                    Add Favourite
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>Added to Favourites!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TVSeriesList;
