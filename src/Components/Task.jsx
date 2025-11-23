import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function Task() {
  const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addTodo(task))
        setTask('')
    }

    const [task, setTask] = useState("")

  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Task