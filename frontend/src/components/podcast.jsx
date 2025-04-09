import React, { useEffect, useState } from "react";
import PodcastList from "./podcastProp.jsx";

function Podcast() {
  const [podcast, setPodcast] = useState([]);
  const [searchPodcast, setSearchPodcast] = useState("");

  useEffect(() => {
    if (searchPodcast) {
      fetchData();
    }
  }, [searchPodcast]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Token not found");
      return; // Exit if there's no token
    }

    try {
      const response = await fetch(`https://infinity-itunes-app.onrender.com/podcast?term=${searchPodcast}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Ensure the 'Bearer ' prefix is included
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPodcast(data.results); // Update state with podcast data
        console.log(data); // Check the response in the console
      } else {
        console.error("Error fetching podcast data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchPodcast(e.target.value);
  };

  return (
    <>
      <h1>Podcast</h1>
      <div className="music-app">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            value={searchPodcast}
            onChange={handleSearchChange}
            placeholder="Search for podcast..."
          />
        </div>
        <div className="row">
          <PodcastList podcast={podcast} />
        </div>
      </div>
    </>
  );
}

export default Podcast;
