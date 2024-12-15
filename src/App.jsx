
import AddTodo from "./Components/AddTodo"
import AppName from "./Components/AppName"
import TodoItem from "./Components/TodoItems"
import Welcome from "./Components/Welcome"
import {TodoItemContext} from "./store/todo-item-store"
import TodoItemContextProvider from "./store/todo-item-store";
import './App.css'
import { useReducer, useState } from "react"
function App() {
 
  
  return (
   <TodoItemContextProvider>
    <center className="todo-container">
     <div className="container text-center">
     <AppName/>
     <AddTodo />
      <Welcome></Welcome>
    <div className="item-container">
     <TodoItem  ></TodoItem>
     
     </div>
     </div>
    </center>
    </TodoItemContextProvider>
  )
}

export default App
