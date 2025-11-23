import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
const todos = useSelector(state => state.todos)
const Dispatch = useDispatch()

  return (
    <ul><h1 className='p-2'>Todos</h1>
    {todos.map((todo)=>
    <li key={todo.id} className='m-2'><input className='p-2' type="text" readOnly value={todo.text}/><button className='border rounded h-10 w-20' onClick={()=>Dispatch(removeTodo(todo.id))}>Delete</button></li>
  )}
  </ul>
  )
}

export default Todos