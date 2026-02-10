import {addToList, clearTextBox} from './todo-helpers.js';

const AddButton = ({text, setText, list, setList}) => {

    const handleAdd = () => {
        addToList(text, list, setList);
        clearTextBox(setText);
    };

    return(
        <>
           <button
                onClick = {() => handleAdd()}
           >
                {'Add'}
            </button>
        </>
    );
}

export default AddButton;