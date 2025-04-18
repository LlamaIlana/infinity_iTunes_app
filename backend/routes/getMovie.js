const express = require("express");
const axios = require("axios");
const verifyToken = require("../middleware/auth.js");
const router = express.Router();

router.get("/", verifyToken, (req, res) => {
  const searchMovie = req.query.term;
  // Construct the iTunes API URL
  const apiUrl = `https://itunes.apple.com/search?media=movie&entity=movie&term=${encodeURIComponent(
    searchMovie
  )}`;

  // Make the request to the iTunes API
  axios
    .get(apiUrl)
    .then((response) => {
      res.json(response.data); // Return the data from iTunes API to the client
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch data from iTunes API" });
    });
});

module.exports = router;
