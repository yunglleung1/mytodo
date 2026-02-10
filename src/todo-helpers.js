const addToList = (text, list, setList) => {
    console.log(list);
    let newList = [...list, text]
    setList(newList);
};

const removeFromList = (index, list, setList) => {
    let newList = list.filter((item, idx) => idx !== index);
    setList(newList);
  }

const clearTextBox = (setText) => {
    setText('');
}

  export {addToList, removeFromList, clearTextBox};