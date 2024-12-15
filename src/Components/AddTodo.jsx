import { useRef,useContext } from "react";
import {TodoItemContext} from '../store/todo-item-store';
function AddTodo(){
  let todoNameElement= useRef();
  let dueDateElement = useRef();
  const {addNewItem} = useContext(TodoItemContext)
  
  
  
  let handleOnclick = (event)=>{
    event.preventDefault();
    addNewItem(todoNameElement.current.value,dueDateElement.current.value);
    todoNameElement.current.value="";
    dueDateElement.current.value ="";
 }
  return(
    
   
  
    <form className="row todo-row" onSubmit={handleOnclick}>
      <div className="col-6">
        <input type="text" placeholder="Enter Todo details" ref={todoNameElement}/>
      </div>
      <div className="col-3">
        <input type="date" ref={dueDateElement}></input>
      </div>
      <div className="col-2">
      <button  className="btn btn-success todo-btn" >Add</button>
      </div>
    </form>
  
   
  )
}
export default AddTodo;