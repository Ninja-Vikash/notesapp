import React from "react";
import { deleteNoteApi } from "@services/apiServices";

const NoteCard = ({ note }) => {
  return (
    <div className="h-24 bg-zinc-900 rounded-lg px-2 py-1 flex justify-between items-start">
      <div>
        <h2 className="text-2xl font-semibold">{note.title}</h2>
        <h3 className="text-xl">{note.description}</h3>
      </div>

      <button
        className="bg-red-600 mt-1 px-2 rounded-lg py-1 text-sm font-bold cursor-pointer"
        onClick={async () => {
          window.location.reload();
          await deleteNoteApi(note._id);
        }}
      >
        Drop
      </button>
    </div>
  );
};

export default NoteCard;
