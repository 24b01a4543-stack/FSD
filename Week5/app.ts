import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Welcome SVECW!</h1><p>You have reached the Home Page.</p>");
});

// About Route
app.get("/about", (req: Request, res: Response) => {
    res.send("<h2>About Page</h2><p>This server was built as a learning exercise for Express.js.</p>");
});

// API Route
app.get("/api/status", (req: Request, res: Response) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "The server is healthy and responding!"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});