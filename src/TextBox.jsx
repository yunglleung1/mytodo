import {inputFieldClass} from './todo-helpers';

const TextBox = ({text, setText}) => {
    return(
        <>
            <input 
                type = "text"
                value = {text}
                onChange = {(e) => setText(e.target.value)}
                className = {inputFieldClass}
            >
            </input>
        </>
    );
}

export default TextBox;