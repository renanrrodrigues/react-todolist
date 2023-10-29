// eslint-disable-next-line no-unused-vars
import React from "react";

const Todo = ({todo, removeTodo, completeTodo}) => {
    return (
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
            </div>
            <div className="actions">
                <button className="complete" onClick={() => completeTodo(todo.id)}>Concluir</button>
                <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
            </div>
        </div>
    )
}


export default Todo;