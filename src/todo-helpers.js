const addToList = (text, list, setList) => {
    console.log(list);
    let newList = [...list, text]
    setList(newList);
};

const removeFromList = (index, list, setList) => {
    let newList = list.filter((item, idx) => idx !== index);
    setList(newList);
  }

  export {addToList, removeFromList};