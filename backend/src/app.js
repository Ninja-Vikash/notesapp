import cors from "cors";
import express from "express";
import notesRouter from "./routes/notes.route.js";

const app = express();

// MIDDLEWARES 👇

app.use(cors());
app.use(express.json());

// ROUTES 👇

app.get("/api", (_, res) => {
    res.json({ message: "NotesApp is LIVE 🔴" });
});

app.use("/api/notes", notesRouter);

export { app };
