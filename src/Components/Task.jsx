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
      <h1>Add a task: </h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input
            value={task}
            className='border w-3xl p-2 h-12'
            onChange={(e)=>setTask(e.target.value)}
            />
            <button type='submit' className='border m-2 h-12 w-18'>Add</button>
        </form>
        <hr/>
    </div>
  )
}

export default Task