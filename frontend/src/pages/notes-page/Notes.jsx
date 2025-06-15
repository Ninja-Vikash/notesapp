import { UserIdContext } from "@contexts/userId";
import {
  createNoteApi,
  deleteNoteApi,
  getNoteApi,
  getNotesApi,
  updateNoteApi,
} from "@services/apiServices";
import { useContext, useEffect, useState } from "react";
import NoteCard from "./NoteCard";

const Notes = () => {
  const [userId] = useContext(UserIdContext);
  const [notesData, setNotesData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [mode, setMode] = useState("Create");
  const [noteId, setNoteId] = useState(null);

  const getNotes = async () => {
    const res = await getNotesApi(userId);
    setNotesData(res);
  };

  const createNote = async () => {
    console.log("woe");
    try {
      const data = {
        title,
        description,
        userId,
      };

      const res = await createNoteApi(data);
    } catch (error) {
      console.log("Error in creatig note", error);
    } finally {
      setTitle("");
      setDescription("");
    }
  };

  const getNote = async () => {
    try {
      const res = await getNoteApi(noteId);
      const data = res.data;

      setTitle(data.title);
      setDescription(data.description);
    } catch (error) {
      console.log("Error while fetching a note from server");
    }
  };

  const updateNote = async () => {

    getNote()

    try {
      const newData = {
        title: title,
        description: description,
      };

      const updateResponse = await updateNoteApi(noteId, newData);
      console.log("note updated successfully", updateResponse);
      if (updateResponse) {
        setTitle("");
        setDescription("");
        setMode("Create");
      }
    } catch (error) {
      console.error("Error while updating note");
    }
  };

  const deleteNote = async (id) => {
    await deleteNoteApi(id);
  };

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    getNotes();
  }, [deleteNote, createNote, updateNote]);

  // useEffect(() => {
  //   getNote();
  // }, [noteId]);

  return (
    <div className="flex gap-4">
      <div className="flex w-[30%] gap-2 flex-col">
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="block">
              NoteName
            </label>
            <input
              id="name"
              className="bg-zinc-900 px-2 py-2 mt-1 border-0 outline-0 rounded-lg w-full"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description" className="block">
              Description
            </label>
            <textarea
              id="description"
              className="bg-zinc-900 px-2 py-2 mt-1 border-0 outline-0 rounded-lg w-full h-32 resize-none"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-2">
          {mode === "Edit" && (
            <button
              onClick={() => {
                setMode("Create");
                setNoteId(null);
                setTitle("");
                setDescription("");
              }}
              className="bg-zinc-700 w-32 px-2 py-2 rounded-lg text-sm hover:cursor-pointer"
            >
              Back
            </button>
          )}
          <button
            className="bg-blue-700 w-32 px-2 py-2 rounded-lg text-sm hover:cursor-pointer"
            type="submit"
            onClick={mode === "Create" ? createNote : updateNote}
          >
            {mode === "Create" ? "Submit" : "Update"}
          </button>
        </div>
      </div>

      <div className="w-[70%]">
        {mode === "Create" && (
          <>
            <h1 className="text-md font-semibold mb-1.5">My notes!</h1>
            <div className="grid grid-cols-2 gap-2">
              {notesData.length !== 0 ? (
                notesData.map((note, index) => (
                  <NoteCard
                    key={index}
                    note={note}
                    setMode={setMode}
                    setNoteId={setNoteId}
                    deleteNote={deleteNote}
                  />
                ))
              ) : (
                <div>
                  <h1>No notes created yet!</h1>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Notes;
