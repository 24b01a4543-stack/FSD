import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Welcome to Express GET JSON Example</h1>");
});

// GET Request - Send JSON
app.get("/student", (req: Request, res: Response) => {
    res.json({
        id: 101,
        name: "Rahul",
        department: "CSE",
        year: 3
    });
});

// GET Request - Dynamic URL
app.get("/student/:id", (req: Request, res: Response) => {
    const id = req.params.id;

    res.json({
        id: id,
        message: "Student details fetched successfully"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});