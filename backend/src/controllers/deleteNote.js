import { Notes } from "../model/notes.model.js";

export const deleteNote = async (req, res) => {
    const noteId = req.params.id;

    try {
        await Notes.findByIdAndDelete(noteId);
        res.json({
            status: 200,
            message: "note is deleted successfully!",
        });
    } catch (error) {
        console.log("Error while deleting note", error);
        res.json({ message: "Error while deleting note", status: 401 });
    }
};
