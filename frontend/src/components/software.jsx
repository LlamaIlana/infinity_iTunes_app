import React, { useEffect, useState } from "react";
import "./component.css";
import SoftwareList from "./softwareProp.jsx";

function Software() {
  //State Changes
  const [software, setSoftware] = useState([]);
  const [searchSoftware, setSearchSoftware] = useState("");

  useEffect(() => {
      if (searchSoftware) {
        fetchData();
      }
    }, [searchSoftware]);
  
    const fetchData = async () => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        console.log("Token not found");
        return; // Exit if there's no token
      }
  
      try {
        const response = await fetch(`http://localhost:8080/software?term=${searchSoftware}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the 'Bearer ' prefix is included
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setSoftware(data.results); // Update state with data
          console.log(data); // Check the response in the console
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    const handleSearchChange = (e) => {
      setSearchSoftware(e.target.value);
    };
  
  return (
    <>
      <h1>Software</h1>
      <div className="music-app">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            value={searchSoftware}
            onChange={handleSearchChange}
            placeholder="Search for software..."
          />
        </div>
        <div className="row">
          <SoftwareList software={software} />
        </div>
      </div>
    </>
  );
}

export default Software;
