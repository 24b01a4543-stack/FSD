import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Home Route
app.get("/", (req: Request, res: Response) => {
    res.send("<h1>CRUD Operations Example</h1>");
});

// POST - Add Student
app.post("/student", (req: Request, res: Response) => {
    const student = req.body;

    res.json({
        message: "Student Added Successfully",
        data: student
    });
});

// PUT - Update Student
app.put("/student/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const student = req.body;

    res.json({
        message: "Student Updated Successfully",
        id: id,
        data: student
    });
});

// DELETE - Delete Student
app.delete("/student/:id", (req: Request, res: Response) => {
    const id = req.params.id;

    res.json({
        message: "Student Deleted Successfully",
        id: id
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});