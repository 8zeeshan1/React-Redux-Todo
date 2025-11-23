import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
   todos: []
}

const todoslice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action)=>{ 
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload) //We will experiment here.
        }
    }
})

export const {addTodo, removeTodo} = todoslice.actions

export default todoslice.reducer

/* 
export const { addTodo, removeTodo } = todoSlice.actions
✅ What this line is doing
It's using object destructuring + ES module export in one line.

1️⃣ todoSlice.actions is an object created by createSlice
When you create a slice:

js
Copy code
export const todoSlice = createSlice({ ... })
Redux Toolkit automatically generates an actions object:

js
Copy code
todoSlice.actions = {
   addTodo: function(payload) {...},
   removeTodo: function(payload) {...}
}
So todoSlice.actions looks like:

js
Copy code
{
  addTodo: ƒ,      // action creator
  removeTodo: ƒ
}
2️⃣ { addTodo, removeTodo } = todoSlice.actions
This is destructuring assignment.

It pulls properties from the object and creates variables:

js
Copy code
const addTodo = todoSlice.actions.addTodo
const removeTodo = todoSlice.actions.removeTodo
Same idea, just shorter.

3️⃣ export const { ... } = ...
This simply exports those variables.

Equivalent to:

js
Copy code
const addTodo = todoSlice.actions.addTodo
export { addTodo }

const removeTodo = todoSlice.actions.removeTodo
export { removeTodo }
But shorter and cleaner.
*/

/* 
Initial State -> Slice -> Reducers -> Store
*/