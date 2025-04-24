const NoteCard = ({ note, deleteNote, setMode, setNoteId }) => {
    return (
        <div className='h-24 bg-zinc-900 rounded-lg px-2 py-1 flex justify-between items-start'>
            <div>
                <h2 className='text-2xl font-semibold'>{note.title}</h2>
                <h3 className='text-xl'>{note.description}</h3>
            </div>

            <div className='flex gap-1'>
                <button
                    className='btn-red'
                    onClick={() => deleteNote(note._id)}
                >
                    Drop
                </button>

                <button
                    className='btn-blue'
                    onClick={() => {
                        setMode("Edit");
                        setNoteId(note._id);
                    }}
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default NoteCard;
