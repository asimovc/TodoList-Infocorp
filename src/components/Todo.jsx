import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return(
        <div className = "todo" style = {{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <div className = "content">
                <p className = "title">{todo.text}</p>
                <p className = "category"> 
					Prioridade: <span style = {{ color: todo.category === "Alta" ? "#E45756"
													: todo.category === "Média" ? " #FFCC80"  /* Gambiarra para o texto ficar colorido da um desconto ai pls*/
													: "#4AC8C1" }}>{todo.category}</span>
				</p>
            </div>
            <div>
                <button className = "complete" onClick = {() => completeTodo(todo.id)}>Completar</button>
                <button className = "remove" onClick = {() => removeTodo(todo.id)}>X</button>
            </div>
        </div>
    )
} 

export default Todo
