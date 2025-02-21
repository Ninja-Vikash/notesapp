import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

export const Notes = mongoose.model("Note", noteSchema)