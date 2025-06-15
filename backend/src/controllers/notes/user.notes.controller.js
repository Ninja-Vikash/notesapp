import { Notes } from "../../model/notes.model.js";

export const getUserNotes = async (req, res) => {
    const { userId } = req.params;

    try {
        if (!userId) return;
        const notes = await Notes.find({ userId });

        res.json(notes);
    } catch (error) {
        console.log("Error while fetching notes for a user ", userId, error);
    }
};
