import {addToList, clearTextBox, fakeDelay, buttonClass, addButtonClass, loadingSpinnerClass} from './todo-helpers.js';
import {useState} from 'react';
import api from './api';  // ← new file

const AddButton = ({text, setText, list, setList}) => {

    const [isAdding, setIsAdding] = useState(false);

    const handleAdd = () => {
        setIsAdding(true);
        clearTextBox(setText);

        // POST new task
        api.post('/tasks', {title: text}).then(res => {
            // console.log('AddButton Res: ', res.data);
            fakeDelay(addToList, [text, list, setList], setIsAdding);
        });        
    };

    return(
        <>
           <button
                className = {buttonClass + " " + addButtonClass}               
                onClick = {() => handleAdd()}
                disabled = {isAdding}
           >
                {'Add'}
                 {isAdding ? 
                    <div className = {loadingSpinnerClass}></div> 
                    : 
                    <></>
                }
            </button>
        </>
    );
}

export default AddButton;