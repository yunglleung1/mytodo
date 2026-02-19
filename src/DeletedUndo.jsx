import {deletedUndoContainerClass, undoButtonClass} from './todo-helpers';

const DeletedUndo = ({list, setList, undoItem, setUndoItem}) => {

    const handleUndo = () => {
        setList([
          ...list.slice(0, undoItem.delItmIdx),  undoItem.delItem, ...list.slice(undoItem.delItmIdx)
        ]);
        setUndoItem(null);
    }

    return(
        <div className = {deletedUndoContainerClass}>
            <span>{`Deleted ${undoItem.delItem}`}</span>
            <button
                className = {undoButtonClass}
                onClick={() => {handleUndo()}}
            >
            {'Undo'}
            </button>
        </div>        
    );
}

export default DeletedUndo;