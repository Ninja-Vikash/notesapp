import { Router } from "express";
import { createNote } from "../controllers/notes/create.controller.js";
import { deleteNote } from "../controllers/notes/delete.controller.js";
import { getNote } from "../controllers/notes/note.controller.js";
import { getNotes } from "../controllers/notes/notes.controller.js";
import { updateNote } from "../controllers/notes/update.controller.js";
import { getUserNotes } from "../controllers/notes/user.notes.controller.js";

const router = Router();

router.get("/", getNotes);

router.get("/:_id", getNote)

router.post("/create", createNote);

router.delete("/:_id/delete", deleteNote);

router.patch("/:_id/update", updateNote);

router.get("/user/:userId", getUserNotes)

export default router;
