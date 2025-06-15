const NoteCard = ({ note, deleteNote, setMode, setNoteId }) => {
  return (
    <div className="min-h-24 bg-zinc-900 rounded-lg px-2 py-2 flex flex-col">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-medium">{note.title}</h2>
        <div className="flex gap-2 items-center">
          <button
            className="btn-red py-1 px-1"
            onClick={() => deleteNote(note._id)}
            aria-label="delete button"
          >
            <img
              src="icons/trash.svg"
              className="h-4 w-4 invert"
              alt="delete icon"
            />
          </button>

          <button
            className="btn-blue py-1 px-1"
            onClick={() => {
              setMode("Edit");
              setNoteId(note._id);
            }}
            aria-label="edit button"
          >
            <img
              src="icons/pen.svg"
              className="w-4 h-4 invert"
              alt="edit icon"
            />
          </button>
        </div>
      </div>

      <h3 className="text-md font-light">{note.description}</h3>
    </div>
  );
};

export default NoteCard;
