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

const htmlTagClass = document.documentElement.classList;

const mainWrapperClass = "min-h-screen sm:px-6 lg:px-8 bg-white dark:bg-gray-900 px-4 py-6";

const headerClass = "flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center";
const toggleButtonClass = "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex-shrink-0";

const inputButtonRowClass = "max-w-xl mx-auto sm:flex-row flex gap-3 w-full";

const inputFieldClass = "flex-1 w-full px-4 py-3 text-base bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black dark:text-white";

const buttonClass = "px-4 py-3 text-sm font-medium rounded-lg";
const addButtonClass = "bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white shadow-md transition duration-200 flex gap-2";
const trashButtonClass = "bg-red-600 hover:bg-red-700 hover:scale-105 text-white shadow-md transition duration-200 flex items-center gap-2";
const deleteButtonClass = "bg-red-600 hover:bg-red-700 text-white shadow-md transition duration-200 flex items-center gap-2";

const deletedUndoContainerClass = "fixed bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 dark:text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-4 z-50 animate-fade-in";
const undoButtonClass = "bg-indigo-600 hover:bg-indigo-700 px-4 py-1 rounded font-bold text-sm";

const loadingSpinnerClass = "animate-spin rounded-full h-4 w-4 border-t-2 border-white";

const toDoListClass = "mt-8 space-y-3 w-full max-w-xl mx-auto"; 

const toDoItemClass = "flex gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm sm:flex-row sm:items-center sm:justify-between";
const itemClass = "dark:hover:bg-gray-700 hover:bg-gray-200 py-3 px-4 mb-2 border border-gray-600 transition duration-150 flex items-center justify-between w-full text-black dark:text-white";

export {addToList, removeFromList, clearTextBox, fakeDelay, snackBarRemovalTimer, htmlTagClass, mainWrapperClass, headerClass, toggleButtonClass, inputButtonRowClass, inputFieldClass, buttonClass, addButtonClass, trashButtonClass, deleteButtonClass, deletedUndoContainerClass, undoButtonClass, loadingSpinnerClass, toDoListClass, toDoItemClass, itemClass};