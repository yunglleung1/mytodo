import {addToList, clearTextBox, fakeDelay} from './todo-helpers.js';
import {useState} from 'react';

const AddButton = ({text, setText, list, setList}) => {

    const [isAdding, setIsAdding] = useState(false);

    const handleAdd = () => {
        setIsAdding(true);
        clearTextBox(setText);
        fakeDelay(addToList, [text, list, setList], setIsAdding);
    };

    return(
        <>
           <button
                className = "bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200 flex items-center gap-2"               
                onClick = {() => handleAdd()}
                disabled = {isAdding}
           >
                {'Add'}
                 {isAdding ? 
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></div> 
                    : 
                    <></>
                }
            </button>
        </>
    );
}

export default AddButton;