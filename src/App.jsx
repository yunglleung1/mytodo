import { useState, useEffect } from 'react'
import './App.css'
import TextBox from './TextBox';
import AddButton from './AddButton';
import TrashButton from './TrashButton';
import List from './List';
import DeletedUndo from './DeletedUndo';

const App = () => {

  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [undoItem, setUndoItem] = useState(null);

  useEffect(() => {
    console.log(text);
  });

  return (
    <>
      <div className = "bg-gray-800 text-white p-8 rounded-xl shadow-2xl max-w-3xl mx-auto min-h-screen">
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
    </>
  )
}

export default App
