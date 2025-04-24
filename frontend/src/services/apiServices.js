import axios from "axios";

export const createNoteApi = async (data) => {
    const response = await axios.post("/api/notes/create", data, {
        headers: { "Content-Type": "application/json" },
    });
    return response.data;
};

export const getNotesApi = async () => {
    const response = await axios.get("/api/notes");
    return response.data;
};

export const getNoteApi = async (id) => {
    const response = await axios.get(`/api/notes/${id}`);
    return response.data;
};

export const deleteNoteApi = async (id) => {
    const response = await axios.delete(`/api/notes/delete/${id}`);
    return response.data;
};

export const updateNoteApi = async (id, data) => {
    const response = await axios.patch(`/api/notes/update/${id}`, data, {
        headers: { "Content-Type": "application/json" },
    });
    return response.data;
};
