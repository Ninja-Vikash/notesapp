import { Notes } from "../../model/notes.model.js";

export const getNote = async (req, res) => {
    const { _id } = req.params;

    try {
        const note = await Notes.findOne({ _id });
        res.json({ status: 200, message: "note found in server", data: note });
    } catch (error) {
        console.log("Error while fetching note from server", error);
    }
};
