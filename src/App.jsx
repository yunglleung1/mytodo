import { useState, useEffect } from 'react'
import './App.css'
import TextBox from './TextBox';
import AddButton from './AddButton';
import TrashButton from './TrashButton';
import List from './List';
import DeletedUndo from './DeletedUndo';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';

import {htmlTagClass, mainWrapperClass, headerClass, toggleButtonClass, inputButtonRowClass,toDoListClass, toDoItemClass} from './todo-helpers.js';

import api from './api';  // ← your new file

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

  // GET all tasks on first mount
  useEffect(() => {
    api.get('/tasks').then(res => {
      // console.log("res.data.map(obj => obj.title: ", res.data.map(obj => obj.title));
      setList(res.data.map(obj => obj.title));
    });
  }, []);

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <button
        onClick = {() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? 
          <SunIcon className = "h-6 w-6 text-yellow-400 flex-shrink-0"/> 
            : 
          <MoonIcon className = "h-6 w-6 text-gray-600 flex-shrink-0" />
        }
      </button>
      <div className = {mainWrapperClass}>
        <div className = {inputButtonRowClass}>
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
