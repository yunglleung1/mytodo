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
      <div className = "bg-gray-800 text-white p-8 rounded-xl shadow-2xl max-w-3xl mx-auto min-h-screen">
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
        <List 
          list = {list}
          setList = {setList}
        ></List>
      </div>
    </>
  )
}

export default App
