const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");
const salesRoutes = require("./routes/sales");

// Load environment variables
dotenv.config();

// Initialize Firebase Admin
const serviceAccount = require("./firebase-admin-sdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Initialize Express
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/sales", salesRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
