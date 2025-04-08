import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Music from "./components/music.jsx";
import TVSeries from "./components/tvSeries.jsx";
import Movie from "./components/movies.jsx";
import Header from "./components/header.jsx";
import Home from "./components/home.jsx";
import EBook from "./components/eBooks.jsx";
import Podcast from "./components/podcast.jsx";
import Software from "./components/software.jsx";
import ShortFilm from "./components/shortFilms.jsx";
import All from "./components/all.jsx";
import FavoritesPage from "./components/favourites.jsx";
import Footer from "./components/footer.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tvseries" element={<TVSeries />} />
        <Route path="/ebook" element={<EBook />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/software" element={<Software />} />
        <Route path="/shortfilm" element={<ShortFilm />} />
        <Route path="/all" element={<All />} />
        <Route path="/favourites" element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
