import React, { useState } from "react";
import Item from "./Item";

function App() {
  // input 数值
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState([{ id: 0, con: 'dsas' }])
  console.log(list);

  const addItem = () => {
    let item = {}
    item.id = list.length + 1
    item.con = inputValue
    setList(() => [...list, item])
  }

  const deleteClick = (id) => {
    setList((list) => {
      return list.filter(v => v.id !== id)
    })
  }
  return (
    <>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} ></input><button onClick={addItem}>添加</button>
      <Item list={list} deleteClick={deleteClick}></Item>
    </>
  );
}

export default App;
