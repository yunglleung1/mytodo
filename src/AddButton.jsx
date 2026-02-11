import {addToList, clearTextBox} from './todo-helpers.js';

const AddButton = ({text, setText, list, setList}) => {

    const handleAdd = () => {
        addToList(text, list, setList);
        clearTextBox(setText);
    };

    return(
        <>
           <button
                className = "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200"
                onClick = {() => handleAdd()}
           >
                {'Add'}
            </button>
        </>
    );
}

export default AddButton;