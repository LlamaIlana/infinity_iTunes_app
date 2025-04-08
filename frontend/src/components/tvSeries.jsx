import React, { useEffect, useState } from "react";
import "./component.css";
import TVSeriesList from "./tvSeriesProp.jsx";

function TvSeries() {
  //State Changes
  const [tvSeries, setTvSeries] = useState([]);
  const [searchTvSeries, setSearchTvSeries] = useState("");

  useEffect(() => {
      if (searchTvSeries) {
        fetchData();
      }
    }, [searchTvSeries]);
  
    const fetchData = async () => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        console.log("Token not found");
        return; // Exit if there's no token
      }
  
      try {
        const response = await fetch(`http://localhost:8080/tvseries?term=${searchTvSeries}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the 'Bearer ' prefix is included
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setTvSeries(data.results); // Update state with data
          console.log(data); // Check the response in the console
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    const handleSearchChange = (e) => {
      setSearchTvSeries(e.target.value);
    };

  return (
    <>
      <h1>TV Series</h1>
      <div className="music-app">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            value={searchTvSeries}
            onChange={handleSearchChange}
            placeholder="Search for TV series..."
          />
        </div>
        <div className="row">
          <TVSeriesList tvSeries={tvSeries} />
        </div>
      </div>
    </>
  );
}

export default TvSeries;
