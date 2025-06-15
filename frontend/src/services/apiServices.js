import axios from "axios";

const baseUrl = "http://localhost:8000";

export const loginApi = async (data) => {
  const response = await axios.post(`${baseUrl}/api/user/login`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const signupApi = async (data) => {
  const response = await axios.post(`${baseUrl}/api/user/signup`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const createNoteApi = async (data) => {
  const response = await axios.post(`${baseUrl}/api/notes/create`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const getNotesApi = async (userId) => {
  const response = await axios.get(`${baseUrl}/api/notes/user/${userId}`);
  return response.data;
};

export const getNoteApi = async (id) => {
  const response = await axios.get(`${baseUrl}/api/notes/${id}`);
  return response.data;
};

export const deleteNoteApi = async (id) => {
  const response = await axios.delete(`${baseUrl}/api/notes/${id}/delete`);
  return response.data;
};

export const updateNoteApi = async (id, data) => {
  const response = await axios.patch(
    `${baseUrl}/api/notes/${id}/update`,
    data,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
};
