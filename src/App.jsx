import { useState, useEffect } from 'react'
import './App.css'
import TextBox from './TextBox.jsx';
import AddButton from './AddButton';
import List from './List';

const App = () => {

  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const addToList = () => {
    let newList = [...list, text]
    setList(newList);
  }

  useEffect(() => {
    console.log(text);
  });

  return (
    <>
      <div>
        <TextBox setText = {setText}></TextBox>
        <AddButton addToList = {addToList}></AddButton>
        <List list = {list}></List>
      </div>
    </>
  )
}

export default App
