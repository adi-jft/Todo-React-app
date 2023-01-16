import React from "react";
import { useState, useEffect, useRef } from "react";
import ToDolist from "./ToDolist";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  let todoNameRef = useRef();
  const todoKey="todoKey";
  
  useEffect(() => {
    if(todos.length>0){
      localStorage.setItem(todoKey, JSON.stringify(todos));
    }
    return
  },[todos]);
  
  useEffect(()=>{
    let lclStgTodo=JSON.parse(localStorage.getItem(todoKey));
    if(lclStgTodo){
      setTodos(lclStgTodo);
    }
  },[])

  let addTodo = (e) => {
    let name = todoNameRef.current.value;
    if (name === "") {
      alert("Please enter a value!");
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, status: false }];
    });
    todoNameRef.current.value = null;
  }

  let clearTodo=()=>{
    let tempTodos=todos.filter((e)=>e.status===false);
    if(todos.length===tempTodos.length){
      alert("Nothing to Clear!")
      return
    }
    setTodos(tempTodos);
  }

  let toggleTodo=(id)=>{
    let tempTodos=[...todos];
    let todo=tempTodos.find((e)=>e.id===id);
    todo.status=!todo.status;
    setTodos(tempTodos);
  }

  return (
    <div className="App">
      <ToDolist todos={todos?todos:""} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={addTodo}>Add Task</button>
      <button onClick={clearTodo}>Clear Task</button>
      <br />
      <span>{todos.filter((e)=>e.status===false).length} Tasks left To Do!</span>
    </div>
  );
}
export default App;
