import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

// Allow the React app to call this API from the browser.
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));

// Let the server read JSON sent in request bodies.
app.use(express.json());

// Health check: a simple way to confirm the server is alive.
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "SupportFlow API",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});