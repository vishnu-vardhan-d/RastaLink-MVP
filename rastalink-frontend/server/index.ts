import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Parse JSON bodies
app.use(express.json());

// CORS middleware for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// API Routes for RastaLink platform
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", service: "rastalink-frontend" });
});

app.get("/api/trucks", (req, res) => {
  // Mock data for development
  res.json([
    { id: 1, plateNumber: "KA-01-1234", status: "active", driver: "Raj Kumar", location: "Delhi" },
    { id: 2, plateNumber: "MH-02-5678", status: "loaded", driver: "Suresh Singh", location: "Mumbai" },
    { id: 3, plateNumber: "TN-03-9012", status: "empty", driver: "Ravi Mohan", location: "Chennai" }
  ]);
});

app.get("/api/dashboard/stats", (req, res) => {
  res.json({
    activeTrucks: 245,
    loadsInTransit: 127, 
    deliveriesCompleted: 1834,
    totalRevenue: 2489750
  });
});

app.get("/api/live-feed", (req, res) => {
  res.json([
    { id: 1, type: "delivery", message: "Load delivered to Mumbai", timestamp: new Date().toISOString() },
    { id: 2, type: "breakdown", message: "Truck KA-01-1234 breakdown near Pune", timestamp: new Date().toISOString() },
    { id: 3, type: "load", message: "New load available: Delhi to Kolkata", timestamp: new Date().toISOString() }
  ]);
});

app.get("/api/status", (req, res) => {
  res.json({
    weather: "Clear sky, 28°C",
    fuelPrice: "₹95.20/L",
    alerts: 3,
    systemStatus: "All systems operational"
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 RastaLink API Server running on port ${port}`);
  console.log(`📡 Health check: http://localhost:${port}/health`);
  console.log(`🛣️ API endpoints: http://localhost:${port}/api/*`);
});