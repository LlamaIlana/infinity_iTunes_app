import React, { useEffect, useState } from "react";
import "./component.css";
import MusicList from "./musicProp.jsx";

function Music() {
  const [music, setMusic] = useState([]);
  const [searchMusic, setSearchMusic] = useState("");

  useEffect(() => {
    if (searchMusic) {
      fetchData();
    }
  }, [searchMusic]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Token not found");
      return; // Exit if there's no token
    }

    try {
      const response = await fetch(`http://localhost:8080/music?term=${searchMusic}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Ensure the 'Bearer ' prefix is included
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMusic(data.results); // Update state with data
        console.log(data); // Check the response in the console
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchMusic(e.target.value);
  };

  return (
    <>
      <h1>Music</h1>
      <div className="music-app">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            value={searchMusic}
            onChange={handleSearchChange}
            placeholder="Search for music album..."
          />
        </div>
        <div className="row">
          <MusicList music={music} />
        </div>
      </div>
    </>
  );
}

export default Music;
