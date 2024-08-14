// make a To-Do list application in which user can add different tasks and shows these tasks in same web page
import React, { useState } from "react";

const Task4 = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [showTask, setShowTask] = useState(false);
  const handleTask = (e)=>{
    if(newTask=="")return
    setTodo((prevState)=> ([
        ...prevState,
        newTask
    ]))
    setNewTask("")
    console.log(todo);
  }
  const handleShow = () => {
    setShowTask(true)
  }
  
  return <>
    <label>Title:</label>
    <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <label>Task</label>
    <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
    <button onClick={handleTask}>AddTask</button>
    
   
    {/* {todo.length>0 && todo.map((item, index)=>(
        <div key={index}>
            <h3> task {index+1}: {item}</h3>
        </div>
    ))} */}

    <button onClick={handleShow}>ShowData</button>
    <h1> Data: </h1>
    <h2> {title}</h2>
    {showTask==true?todo.map((item, index)=>(
        <div key={index}>
            <h3> task {index+1}: {item}</h3>
        </div>
    )):<></>}
  </>;
};
export default Task4;