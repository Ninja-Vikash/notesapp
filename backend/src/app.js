import cors from "cors";
import express from "express";
import notesRouter from "./routes/notes.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

// MIDDLEWARES 👇

app.use(cors());
app.use(express.json());

// ROUTES 👇

app.get("/api", (_, res) => {
    res.send("NotesApp is LIVE! 🔴");
});

app.use("/api/notes", notesRouter);

app.use("/api/user", userRouter);

export { app };

