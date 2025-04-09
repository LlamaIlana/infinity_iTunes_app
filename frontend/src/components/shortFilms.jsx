import React, { useEffect, useState } from "react";
import "./component.css";
import ShortFilmList from "./shortFilmProp.jsx";

function ShortFilm() {
  //State Changes
  const [shortFilm, setShortFilm] = useState([]);
  const [searchShortFilm, setsearchShortFilm] = useState("");

  useEffect(() => {
      if (searchShortFilm) {
        fetchData();
      }
    }, [searchShortFilm]);
  
    const fetchData = async () => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        console.log("Token not found");
        return; // Exit if there's no token
      }
  
      try {
        const response = await fetch(`https://infinity-itunes-app.onrender.com/shortfilm?term=${searchShortFilm}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the 'Bearer ' prefix is included
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setShortFilm(data.results); // Update state with  data
          console.log(data); // Check the response in the console
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    const handleSearchChange = (e) => {
      setsearchShortFilm(e.target.value);
    };

  return (
    <>
      <h1>Short Film</h1>
      <div className="music-app">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            value={searchShortFilm}
            onChange={handleSearchChange}
            placeholder="Search for short films..."
          />
        </div>
        <div className="row">
          <ShortFilmList shortFilm={shortFilm} />
        </div>
      </div>
    </>
  );
}

export default ShortFilm;
