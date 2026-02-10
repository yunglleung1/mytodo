import {removeFromList} from './todo-helpers';

const DeleteButton = ({idx, list, setList}) => {
    return(
        <>
            <button
                onClick = {() => removeFromList(idx, list, setList)}
            >
                {'Delete from list'}
            </button>
        </>
    );
}

export default DeleteButton;