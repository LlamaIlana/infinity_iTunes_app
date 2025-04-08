import React, { useEffect, useState } from "react";
import MovieList from "./movieProp.jsx";

function Movie() {
  const [movie, setMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    if (searchMovie) {
      fetchData();
    }
  }, [searchMovie]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Token not found");
      return; // Exit if there's no token
    }

    try {
      const response = await fetch(`http://localhost:8080/movie?term=${searchMovie}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Ensure the 'Bearer ' prefix is included
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMovie(data.results); // Update state with  data
        console.log(data); // Check the response in the console
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchMovie(e.target.value);
  };

  return (
    <>
      <h1>Movies</h1>
      <div className="music-app">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            value={searchMovie}
            onChange={handleSearchChange}
            placeholder="Search for movies..."
          />
        </div>
        <div className="row">
          <MovieList movie={movie} />
        </div>
      </div>
    </>
  );
}

export default Movie;
