const axios = require('axios');

// Controller to fetch albums from iTunes API
const getMusic = async (req, res) => {
  console.log(req.query); // Log the entire query object to check if it's populated
  const searchMusic = req.query.term;

  if (!searchMusic) {
    return res.status(400).json({ error: "Search term is required" });
  }

  const url = `https://itunes.apple.com/search?media=music&entity=album&term=${encodeURIComponent(searchMusic)}`;

  try {
    const response = await fetch(url);
    res.json(response.data); // Send the albums data as JSON
  } catch (error) {
    console.error('Error fetching albums:', error);
    res.status(500).json({ error: 'Failed to fetch albums from iTunes API' });
  }
};


module.exports = {
  getMusic};
