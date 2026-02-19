import DeleteButton  from './DeleteButton.jsx';
import {toDoListClass, toDoItemClass, itemClass} from './todo-helpers';

const List = ({list, setList, setUndoItem}) => {
    return(
        <div className = {toDoListClass}>
            {list.length ? 
                    <ul>{list.map((item, idx) => 
                        <li 
                            key = {idx}
                            className = {toDoItemClass + " " + itemClass}
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
        </div>
    );
}

export default List;