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

/*
const fakeDelay = (addToList, text, list, setList, setIsAdding) => {
    setTimeout(() => {// fake delay so spinner shows
        setIsAdding(false);
        addToList(text, list, setList);
    },400)
}*/

const fakeDelay = (action, actionItems, delayControl) => {
    setTimeout(() => {// fake delay so spinner shows
        delayControl(false);
        action(...actionItems);
    },400)
}

export {addToList, removeFromList, clearTextBox, fakeDelay};