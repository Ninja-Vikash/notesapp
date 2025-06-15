import { Notes } from "../../model/notes.model.js";

export const updateNote = async (req, res) => {
    const { _id } = req.params;
    const { title, description } = req.body;

    try {
        const updateResponse = await Notes.findOneAndUpdate(
            { _id },
            { title, description },
            { new: true }
        );
        res.json({
            status: 201,
            message: "note is updated successfully",
            data: updateResponse,
        });
    } catch (error) {
        console.log("Error in updating note", error);
    }
};
