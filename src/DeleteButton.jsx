import {removeFromList, fakeDelay, snackBarRemovalTimer, buttonClass, deleteButtonClass, loadingSpinnerClass} from './todo-helpers';
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
            className = {buttonClass + " " + deleteButtonClass}
                onClick = {() => handleDelete()}
            >
                {'Delete'}
                {isDeletng ?
                    <div className = {loadingSpinnerClass}></div>
                    :
                    <></> 
                }                
            </button>
        </>
    );
}

export default DeleteButton;