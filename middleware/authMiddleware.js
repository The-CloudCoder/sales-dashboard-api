const admin = require("firebase-admin");

/**
 * Middleware to verify Firebase Bearer Token
 */
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Ensure the Authorization header is present
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract the token

  try {
    // Verify the token with Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Attach the decoded user to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};

module.exports = verifyToken;
