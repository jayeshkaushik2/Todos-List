import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let heading = {
        marginTop: "30px",
        marginBottom: "20px"
    }
    return (
        <div className="container">
            <h3 className="text-center" style={heading}>Todos List</h3>
            {props.todos.length===0? "No todos!" : 
            props.todos.map((todo)=>{
                return ( <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                )
                })}
            
        </div>
    )
}
