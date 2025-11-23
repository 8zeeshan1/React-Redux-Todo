import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
const todos = useSelector(state => state.todos)
const Dispatch = useDispatch()

  return (
    <ul>
    {todos.map((todo)=>
    <li key={todo.id}><input type="text" readOnly value={todo.text}/><button onClick={()=>Dispatch(removeTodo(todo.id))}>Delete</button></li>
  )}
  </ul>
  )
}

export default Todos