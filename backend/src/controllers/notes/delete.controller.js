import { Notes } from "../../model/notes.model.js";

export const deleteNote = async (req, res) => {
    const { _id } = req.params;

    try {
        await Notes.findByIdAndDelete({ _id });
        res.json({
            status: 200,
            message: "note is deleted successfully!",
        });
    } catch (error) {
        console.log("Error while deleting note", error);
        res.json({ message: "Error while deleting note", status: 401 });
    }
};
