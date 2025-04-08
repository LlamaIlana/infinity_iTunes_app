import React, { useEffect, useState } from "react";
import "./component.css";
import AllListList from "./allProp";

function All() {
  //State Changes
  const [all, setAll] = useState([]);
  const [searchAll, setSearchAll] = useState("");

   useEffect(() => {
      if (searchAll) {
        fetchData();
      }
    }, [searchAll]);
  
    const fetchData = async () => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        console.log("Token not found");
        return; // Exit if there's no token
      }
  
      try {
        const response = await fetch(`http://localhost:8080/all?term=${searchAll}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the 'Bearer ' prefix is included
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setAll(data.results); // Update state with data
          console.log(data); // Check the response in the console
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    const handleSearchChange = (e) => {
      setSearchAll(e.target.value);
    };

  return (
    <>
      <h1>Browse All</h1>
      <div className="music-app">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            value={searchAll}
            onChange={handleSearchChange}
            placeholder="Search for any category..."
          />
        </div>
        <div className="row">
          <AllListList all={all} />
        </div>
      </div>
    </>
  );
}

export default All;
