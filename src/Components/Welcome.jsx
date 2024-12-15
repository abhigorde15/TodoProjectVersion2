import { useContext } from "react";
import {TodoItemContext} from "../store/todo-item-store"
const Welcome = ()=>{
  const todoItemObj = useContext(TodoItemContext)
    const todoItems = todoItemObj.TodoItems;
  return (<>
    {todoItems.length==0 &&<div>Enjoy Your Day</div>}
    </> )
}
export default Welcome;