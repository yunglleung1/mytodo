import { useState, useEffect } from 'react'
import './App.css'
import TextBox from './TextBox.jsx';
import AddButton from './AddButton';
import List from './List';

const App = () => {

  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(text);
  });

  return (
    <>
      <div>
        <TextBox setText = {setText}></TextBox>
        <AddButton
          text = {text}
          list = {list}
          setList = {setList}
        >          
        </AddButton>
        <List 
          list = {list}
          setList = {setList}
        ></List>
      </div>
    </>
  )
}

export default App
