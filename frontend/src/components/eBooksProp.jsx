import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addToFavourites } from './Redux/favouriteSlice'; 

const EBooksList = (props) => {

  const dispatch = useDispatch();

  const [showPopup, setShowPopup] = useState(false);

  const addToFavourtise = (eBook) => {
    dispatch(addToFavourites(eBook)); 
  };

  const handleAddToFavourites = (eBook) => {
    // Show the pop-up
    setShowPopup(true);
    // Hide the pop-up after 3 seconds
    setTimeout(() => {
      setShowPopup(false); 
    }, 2000);
    // Add to favourites
    addToFavourtise(eBook);
  };

  return (
    <div className="music-list-container">
      <div className="container">
        <div className="row">
          {props.eBook.map((eBook, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card">
                <img
                  src={eBook.artworkUrl100}
                  className="card-img-top"
                  alt="Album Art"
                />
                <div className="card-body">
                  <h5 className="card-title">{eBook.artistName}</h5>
                  <p className="card-text">{eBook.genres}</p>
                  <p className="card-text">
                    {new Date(eBook.releaseDate).toLocaleDateString()}
                  </p>
                  <button className="btn" onClick={() => handleAddToFavourites(eBook)}>Add Favourite</button>
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

export default EBooksList;
