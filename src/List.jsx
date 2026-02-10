import DeleteButton  from './DeleteButton.jsx';

const List = ({list, setList}) => {
    return(
        <>
            <ul>{list.map((item, idx) => 
                <li key = {idx}>{`${item}`}
                    <DeleteButton 
                        idx = {idx} 
                        list = {list} 
                        setList = {setList}
                    />
                </li>                
            )}</ul>
        </>
    );
}

export default List;