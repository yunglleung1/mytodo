import {addToList} from './todo-helpers.js';

const AddButton = ({text, list, setList}) => {

    return(
        <>
           <button
                onClick = {() => addToList(text, list, setList)}
           >
                {'Add'}
            </button>
        </>
    );
}

export default AddButton;