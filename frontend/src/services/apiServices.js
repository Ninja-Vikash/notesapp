import axios from "axios";

export const createNoteApi = async (data) => {
    const response = await axios.post("/api/create", data, {
        headers: { "Content-Type": "application/json" },
    });
    return response.data;
};

export const getNotesApi = async () => {
    const response = await axios.get("/api/notes");
    return response.data;
};

export const deleteNoteApi = async (id) => {
    const response = await axios.delete(`/api/delete/${id}`);
    return response.data;
};
