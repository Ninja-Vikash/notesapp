import { Router } from "express";
import { createNote } from "../controllers/createNote.js";
import { deleteNote } from "../controllers/deleteNote.js";
import { getNote } from "../controllers/getNote.js";
import { getNotes } from "../controllers/getNotes.js";
import { updateNote } from "../controllers/updateNote.js";

const router = Router();

router.get("/", getNotes);

router.get("/:id", getNote)

router.post("/create", createNote);

router.delete("/delete/:id", deleteNote);

router.patch("/update/:id", updateNote);

export default router;
