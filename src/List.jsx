import DeleteButton  from './DeleteButton.jsx';

const List = ({list, setList, setUndoItem}) => {
    return(
        <>
            {list.length ? 
                    <ul>{list.map((item, idx) => 
                        <li 
                            key = {idx}
                            className = "bg-gray-700 shadow-md hover:bg-gray-600 py-3 px-4 mb-2 rounded-lg border border-gray-600 transition duration-150 flex items-center justify-between gap-3 w-full"
                        >
                                {`${item}`}
                                <DeleteButton 
                                    idx = {idx} 
                                    list = {list} 
                                    setList = {setList}
                                    setUndoItem = {setUndoItem}
                                />
                        </li>
                    )}</ul>
                    :
                    <>
                        {'No tasks yet.'}                    
                    </>
            }
        </>
    );
}

export default List;