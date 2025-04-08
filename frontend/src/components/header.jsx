import React from "react";
import "./header.css";
import Logo from "./img/logo4.png";
import Like from "./img/like.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  // Navigation functions
  const goFavourites = () => {
    navigate("/favourites");
  };
  const goToAll = () => {
    navigate("/all");
  };

  return (
    <header className="App-header">
      <nav className="navbar">
        <ul className="navbar-items">
          {/* Left side (empty space) */}
          <li></li>

          {/* Center logo */}
          <li className="navbar-logo">
            <a href="/">
              <img src={Logo} alt="Logo" className="navbar-logo-img" />
            </a>
          </li>

          {/* Conditionally hide the input field on the /all page */}
          <li className="navbar-search">
            <div className="search-bar">
              {location.pathname !== "/all" && (
                <input
                  type="text"
                  placeholder="Search for something"
                  onClick={goToAll}
                />
              )}
            </div>
          </li>
          <li className="navbar-favorites">
            <button className="fav-btn" onClick={goFavourites}>
              <img src={Like} alt="Favourites" className="fav-icon" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
