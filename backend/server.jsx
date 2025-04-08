const express = require("express");
const bodyParser = require("body-parser");
const getAll = require("./routes/getAll.jsx");
const getMusic = require("./routes/getMusic.jsx");
const getEbook = require("./routes/getEBook.jsx");
const getMovie = require("./routes/getMovie.jsx");
const getPodcast = require("./routes/getPodcast.jsx");
const getShortFilm = require("./routes/getShortFilm.jsx");
const getSoftware = require("./routes/getSoftware.jsx");
const getTVSeries = require("./routes/getTVSeries.jsx");

const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your-secret-key";
//cors
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));
// Allows us to parse the body of a request
app.use(bodyParser.json());

//Define the route to retrieve
app.use("/all", getAll);
app.use("/music", getMusic);
app.use("/movie", getMovie);
app.use("/podcast", getPodcast);
app.use("/shortfilm", getShortFilm);
app.use("/software", getSoftware);
app.use("/tvseries", getTVSeries);
app.use("/ebooks", getEbook);


// Route to generate a token automatically when visiting the homepage
app.get("/", (req, res) => {
  const token = jwt.sign({ user: "anonymous" }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "Welcome to the Home Page! Check the console for your token.",
    token, });
});

//Listening on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
