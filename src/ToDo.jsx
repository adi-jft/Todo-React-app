import React from "react";

const ToDo = ({todo, toggleTodo}) => {
    let clickCheckbox=()=>{
        toggleTodo(todo.id);
    }

    return (
        <div>
            <label>
                <input type="checkbox" defaultChecked={todo.status} onClick={clickCheckbox} />
                {todo.name}
            </label>
        </div>
    )
};
export default ToDo;
