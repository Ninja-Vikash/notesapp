import React, { useEffect, useState } from "react";
import { getNotesApi } from "@services/apiServices";
import Root from "@components/containers/Root";
import NoteCard from "./NoteCard";

const Notes = () => {
  const [notesData, setNotesData] = useState([]);

  const getNotes = async () => {
    const res = await getNotesApi();
    setNotesData(res);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <Root>
      <h1 className="text-xl font-semibold mb-3">Your notes</h1>
      <div className="grid grid-cols-3 gap-2">
        {notesData.length !== 0 ? (
          notesData.map((note, index) => <NoteCard key={index} note={note} />)
        ) : (
          <div>
            <h1>No notes created yet!</h1>
          </div>
        )}
      </div>
    </Root>
  );
};

export default Notes;
