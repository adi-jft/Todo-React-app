import React from "react";
import ToDo from "./ToDo";

const ToDolist = ({todos, toggleTodo}) => {
    return (
        <div>
            <h1>To Do List</h1>
            {todos.map((e) => {
                return <ToDo key={e.id} toggleTodo={toggleTodo} todo={e} />
            })}
        </div>
    )
}
export default ToDolist;