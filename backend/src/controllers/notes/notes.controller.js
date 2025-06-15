import { Notes } from "../../model/notes.model.js";


export const getNotes = async (_, res) => {
    try {
        const notes = await Notes.find();
        res.json(notes);
    } catch (error) {
        console.log("Error in fetching notes", error);
    }
};
