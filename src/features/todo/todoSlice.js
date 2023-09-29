/* eslint-disable no-unused-vars */
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
       id:1,
       text:"hello  "
    }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{

        // ADD TODO
        addTodo:(state,action)=>{
            const todo={
                id: nanoid(),
                text:action.payload,    
            }
            state.todos.push(todo)
        },

        // DELETE TODO
        removeTodo:(state, action)=>{
            state.todos= state.todos.filter((todo)=>todo.id !== action.payload)
        },

        // UPDATE TODO
        updateTodo:(state,action)=>{
            const {id,text}=action.payload;
            state.todos= state.todos.map((todo)=>todo.id === id ? {...todo, text}: todo)
        }
    }   
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer