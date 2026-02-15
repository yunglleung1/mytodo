import {removeFromList, fakeDelay, snackBarRemovalTimer} from './todo-helpers';
import {useState} from 'react';

const DeleteButton = ({idx, list, setList, setUndoItem}) => {
    const [isDeletng, setIsDeleting] = useState(false);

    const handleDelete = () => {
        setIsDeleting(true);
        setUndoItem({delItem: list[idx], delItmIdx: idx});
        fakeDelay(removeFromList, [idx, list, setList], setIsDeleting);
        snackBarRemovalTimer(setUndoItem);
    }

    return(
        <>
            <button
            className = "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200 flex items-center gap-2"
                onClick = {() => handleDelete()}
            >
                {'Delete'}
                {isDeletng ?
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></div>
                    :
                    <></> 
                }                
            </button>
        </>
    );
}

export default DeleteButton;