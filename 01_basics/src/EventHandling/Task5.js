import React, { useState } from "react";

const Task4 = () => {
  const [title, setTitle] = useState("");
//   todo is an array
  const [todo, setTodo] = useState([]);
//   i had used newTask here to store the whole input of task and then i pushed this newTask value in the array named todo
  const [newTask, setNewTask] = useState("");

  const [showTask, setShowTask] = useState(false);
  const [removeIdx, setRemoveIdx] = useState(0);

  const handleTask = (e)=>{
    if(newTask=="")return
    setTodo((prevState)=> ([
        ...prevState,
        newTask
    ]))
    setNewTask("")
    console.log(todo);
  }
  const handleShow = (e) => {
    setShowTask(true)
  }
  const handleRemove = (index) => {
    setRemoveIdx(index)
    setTodo((prevState) =>{ 
        const filtered = prevState.filter((item, idx)=> (
            idx!=index
        ));
        return filtered;        
    })
  }
  
  return <>
    <label>Title:</label>
    <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <label>Task</label>
    <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
    <button onClick={handleTask}>AddTask</button>

    <button onClick={handleShow}>ShowData</button>
    <h1> Data: </h1>
    <h2> {title}</h2>
    {showTask==true?todo.map((item, index)=>(
        <div key={index}>
            <h3> task {index+1}: {item}</h3>
            <button onClick={(e)=>{handleRemove(index)}}>Remove</button>
        </div>
    )):<></>}
  </>;
};
export default Task4;