import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Welcome to Express with TypeScript</h1>");
});

// User Route (Route Parameter)
app.get("/user/:id", (req: Request, res: Response) => {
    const userId = req.params.id;

    res.send(`
        <h1>User Profile</h1>
        <p>User ID: <strong>${userId}</strong></p>
    `);
});

// Flights Route (Multiple Route Parameters)
app.get("/flights/:from/:to", (req: Request, res: Response) => {
    const { from, to } = req.params;

    res.send(`
        <h1>Flight Search</h1>
        <p>From: <strong>${from}</strong></p>
        <p>To: <strong>${to}</strong></p>
    `);
});

// Search Route (Query Parameters)
app.get("/search", (req: Request, res: Response) => {
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Search Results",
        filteringBy: category || "None",
        sortingBy: sort || "Default"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});