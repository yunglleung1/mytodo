
const TextBox = ({setText}) => {
    return(
        <>
            <input 
                type = "text"
                onChange = {(e) => setText(e.target.value)}
            >
            </input>
        </>
    );
}

export default TextBox;