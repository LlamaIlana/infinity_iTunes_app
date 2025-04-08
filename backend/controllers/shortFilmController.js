const axios = require('axios');

// Controller to fetch albums from iTunes API
const getShortFilm = async (req, res) => {
  console.log(req.query); // Log the entire query object to check if it's populated
  const searchShortFilm = req.query.term;

  if (!searchShortFilm) {
    return res.status(400).json({ error: "Search term is required" });
  }

  const url = `https://itunes.apple.com/search?media=shortFilm&entity=shortFilm&term=${encodeURIComponent(searchShortFilm)}`;

  try {
    const response = await fetch(url);
    res.json(response.data); // Send the albums data as JSON
  } catch (error) {
    console.error('Error fetching albums:', error);
    res.status(500).json({ error: 'Failed to fetch albums from iTunes API' });
  }
};


module.exports = {
  getShortFilm
};
