import {removeFromList} from './todo-helpers';

const DeleteButton = ({idx, list, setList}) => {
    return(
        <>
            <button
            className = "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200"
                onClick = {() => removeFromList(idx, list, setList)}
            >
                {'Delete from list'}
            </button>
        </>
    );
}

export default DeleteButton;