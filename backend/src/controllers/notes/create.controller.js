import { Notes } from "../../model/notes.model.js";

export const createNote = async (req, res) => {
    const { title, description, userId } = req.body;

    try {
        const newNote = await Notes({ title, description, userId });
        await newNote.save()

        res.json({
            data: newNote,
            message: "note is created successfully!!",
        });
    } catch (error) {
        console.log("Error occurred in creating note", error);
    }
};
