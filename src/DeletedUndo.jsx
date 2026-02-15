const DeletedUndo = ({list, setList, undoItem, setUndoItem}) => {

    const handleUndo = () => {
        setList([
          ...list.slice(0, undoItem.delItmIdx),  undoItem.delItem, ...list.slice(undoItem.delItmIdx)
        ]);
        setUndoItem(null);
    }

    return(
        <div className = "fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-4 z-50 animate-fade-in">
            <span>{`Deleted ${undoItem.delItem}`}</span>
            <button
                className = "bg-indigo-600 hover:bg-indigo-700 px-4 py-1 rounded font-bold text-sm"
                onClick={() => {handleUndo()}}
            >
            {'Undo'}
            </button>
        </div>        
    );
}

export default DeletedUndo;