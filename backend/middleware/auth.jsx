const jwt = require("jsonwebtoken");
const JWT_SECRET = "your-secret-key";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]; // Read token from request header

  // Ensure the token is in 'Bearer <token>' format
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(403).json({ message: "No token provided or incorrect format" });
  }

  const actualToken = token.split(" ")[1]; // Extract the token part

  try {
    const decoded = jwt.verify(actualToken, JWT_SECRET); // Verify token
    req.user = decoded; // Attach decoded data to request
    next(); // Continue to next middleware or route
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
