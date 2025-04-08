import React, { useEffect, useState } from "react";
import EBooksList from "./eBooksProp.jsx";

function EBook() {
  const [eBook, setEBook] = useState([]);
  const [searchEBook, setSearchEBook] = useState("");

  useEffect(() => {
      if (searchEBook) {
        fetchData();
      }
    }, [searchEBook]);
  
    const fetchData = async () => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        console.log("Token not found");
        return; // Exit if there's no token
      }
  
      try {
        const response = await fetch(`http://localhost:8080/ebooks?term=${searchEBook}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the 'Bearer ' prefix is included
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setEBook(data.results); // Update state with data
          console.log(data); 
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    const handleSearchChange = (e) => {
      setSearchEBook(e.target.value);
    };


  return (
    <>
      <h1>eBooks</h1>
      <div className="music-app">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            value={searchEBook}
            onChange={handleSearchChange}
            placeholder="Search for eBooks..."
          />
        </div>
        <div className="row">
          <EBooksList eBook={eBook} />
        </div>
      </div>
    </>
  );
}

export default EBook;
