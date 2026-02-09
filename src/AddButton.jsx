const AddButton = ({addToList}) => {

    return(
        <>
           <button
            onClick = {addToList}
           >
                {'Add To List'}
            </button>
        </>
    );
}

export default AddButton;