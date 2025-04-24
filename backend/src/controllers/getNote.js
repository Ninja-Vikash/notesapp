import { Notes } from "../model/notes.model.js";

export const getNote = async (req, res) => {
    const noteId = req.params.id;

    try {
        const note = await Notes.findOne({ _id: noteId });
        res.json({ status: 200, message: "note found in server", data: note });
    } catch (error) {
        console.log("Error while fetching note from server", error);
    }
};
