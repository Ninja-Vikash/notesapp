import { Notes } from "../model/notes.model.js";

export const createNote = async (req, res) => {
    const { title, description } = req.body;

    try {
        const note = await Notes.create({ title, description });
        console.log(note);
        res.json({
            status: 201,
            message: "note is created successfully!!",
            data: note,
        });
    } catch (error) {
        console.log("Error occurred in creating note", error);
    }
};
