import DeleteButton  from './DeleteButton.jsx';

const List = ({list, setList}) => {
    return(
        <>
            {list.length ? 
                    <ul>{list.map((item, idx) => 
                        <li 
                            key = {idx}
                            className = "hover:bg-grey-700 hover:border-indigo-500 py-2 px-4 rounded-md border border-transparent transition duration-150"
                        >
                                {`${item}`}
                                <DeleteButton 
                                    idx = {idx} 
                                    list = {list} 
                                    setList = {setList}
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