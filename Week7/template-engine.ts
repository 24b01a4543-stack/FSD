import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.render("index", {
        title: "User Registration",
        error: null,
        user: null
    });
});

app.post("/register", (req: Request, res: Response) => {
    const { username, age } = req.body;
    let errorMessage: string | null = null;
    if (!username || username.length < 3) {
        errorMessage = "Username must be at least 3 characters long.";
    }
    else if (!age || isNaN(Number(age)) || Number(age) < 18) {
        errorMessage = "You must be at least 18 years old.";
    }
    if (errorMessage) {

        res.render("index", {
            title: "Registration Failed",
            error: errorMessage,
            user: null
        });
    }
    else {

        res.render("index", {
            title: "Registration Successful",
            error: null,
            user: username
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});