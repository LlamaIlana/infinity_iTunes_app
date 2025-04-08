import React from "react";
import "./home.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  useEffect(() => {
    // Fetch JWT token when the user visits the homepage
    const fetchToken = async () => {
      const response = await fetch("http://localhost:8080/");
      const data = await response.json();
      
      // Store token in localStorage
      localStorage.setItem("token", data.token);
    };

    fetchToken(); // Fetch and store token on page load
  }, []);

  useEffect(() => {
    // Add a class to the body for the home page
    document.body.classList.add("home-page");
    // Cleanup function to remove the class when leaving the page
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);
  //Navigation
  const navigate = useNavigate();
  const goToMusic = () => {
    navigate("/music");
  };
  const goToMovie = () => {
    console.log("Navigating to /movie");
    navigate("/movie");
  };
  const goToTvSeries = () => {
    navigate("/tvseries");
  };
  const goToEBooks = () => {
    navigate("/ebook");
  };
  const goToPodcast = () => {
    navigate("/podcast");
  };
  const goToSoftware = () => {
    navigate("/software");
  };
  const goToShortFilm = () => {
    navigate("/shortfilm");
  };
  const goToAll = () => {
    navigate("/all");
  };

  return (
    <>
      <h2>What are you looking for ?</h2>
      <div className="home-container">
        <div className="button-container">
          {/* Your buttons here */}
          <div className="button-row">
            <button onClick={goToMusic}>Music</button>
            <button onClick={goToMovie}>Movies</button>
            <button onClick={goToTvSeries}>TV Series</button>
          </div>
          <div className="button-row">
            <button onClick={goToSoftware}>Software</button>
            <button onClick={goToPodcast}>Podcasts</button>
            <button onClick={goToShortFilm}>Short Films</button>
          </div>
          <div className="button-row">
            <button onClick={goToEBooks}>eBooks</button>
            <button onClick={goToAll}>Browse All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;