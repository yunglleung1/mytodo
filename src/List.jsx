const List = ({list}) => {
    return(
        <>
            <ul>{list.map((item, idx) => <li key = {idx}>{`${item}`}</li>)}</ul>
        </>
    );
}

export default List;