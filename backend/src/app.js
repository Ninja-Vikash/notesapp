import cors from "cors";
import express from "express";
import { Notes } from "./model/notes.model.js";

const app = express();

// MIDDLEWARES 👇

app.use(cors());
app.use(express.json());

// ROUTES 👇

app.get("/api", (_, res) => {
  res.json({ message: "API is working fine" });
});

app.get("/api/notes", async (_, res) => {
    try {
        const notes = await Notes.find()
        res.json(notes)
    } catch (error) {
        console.log("Error in fetching notes", error)
    }
})

app.post("/api/create", async (req, _) => {
  const { title, description } = req.body;

  try {
    const note = await Notes.create({ title, description });
    console.log(note);
  } catch (error) {
    console.log("Error in creating note", error);
  }
});

app.delete("/api/delete/:id", async (req, _) => {
    const id = req.params.id

    await Notes.findByIdAndDelete(id)
})

export { app };

