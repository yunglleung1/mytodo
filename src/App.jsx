import { useState, useEffect } from 'react'
import './App.css'
import TextBox from './TextBox';
import AddButton from './AddButton';
import TrashButton from './TrashButton';
import List from './List';
import DeletedUndo from './DeletedUndo';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

import {htmlTagClass} from './todo-helpers.js';

const App = () => {

  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [undoItem, setUndoItem] = useState(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    console.log(htmlTagClass);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    savedTheme ? setTheme(savedTheme) : setTheme("dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    theme === "dark" ? htmlTagClass.add("dark") : htmlTagClass.remove("dark");
  }, [theme]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <button
        onClick = {() => setTheme(theme === "dark" ? "light" : "dark")}
        className = "p-2 rounded-full hover:bg-gray-700 transition"
      >
        {theme === "dark" ? 
          <SunIcon className="h-6 w-6 text-yellow-400"/> 
            : 
          <MoonIcon className="h-6 w-6 text-gray-600" />
        }
      </button>
      <div className = "bg-white text-gray-900 dark:bg-gray-800 dark:text-white p-8 rounded-xl shadow-2xl max-w-3xl mx-auto min-h-screen">
        <div className = "flex items-center justify-center gap-3 w-full m-4">
          <TextBox
            text = {text} 
            setText = {setText}
          >          
          </TextBox>
          <AddButton
            text = {text}
            setText = {setText}
            list = {list}
            setList = {setList}          
          >          
          </AddButton>
          <TrashButton
            setList = {setList}
          />
        </div>
        <List 
          list = {list}
          setList = {setList}
          setUndoItem = {setUndoItem}
        ></List>
        {undoItem ?
          <DeletedUndo
            list = {list} 
            setList = {setList}
            undoItem = {undoItem} 
            setUndoItem = {setUndoItem}
          />
          :
          <></>
        }
      </div>
      
    </div>
  )
}

export default App
