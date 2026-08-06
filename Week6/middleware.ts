import express from "express";
import type { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 3000;

// Custom Middleware
function logger(req: Request, res: Response, next: NextFunction): void {
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);

    next();
}

// Use Middleware
app.use(logger);

// Home Route
app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Welcome to Middleware Example</h1>");
});

// Student Route
app.get("/student", (req: Request, res: Response) => {
    res.json({
        id: 101,
        name: "Rahul",
        department: "CSE"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});