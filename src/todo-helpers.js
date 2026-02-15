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

const fakeDelay = (action, actionItems, delayControl) => {
    setTimeout(() => {// fake delay so spinner shows
        delayControl(false);
        action(...actionItems);
    },400)
}

const snackBarRemovalTimer = (setUndoItem) => {
    setTimeout(() => setUndoItem(null), 5000);   // auto-hide after 5 sec
}

export {addToList, removeFromList, clearTextBox, fakeDelay, snackBarRemovalTimer};