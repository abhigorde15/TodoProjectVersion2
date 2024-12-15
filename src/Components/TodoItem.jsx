import {TodoItemContext} from '../store/todo-item-store';
import { useContext } from 'react';
function TodoItem({item,}){
  const {DeleteItem} = useContext(TodoItemContext)
  return(
    <div className="row todo-row" key={item.task}>
    <div className="col-6">
     {item.task}
    </div>
    <div className="col-4">
     {item.dueDate} 
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger todo-btn" onClick={()=>DeleteItem(item.task)}>Delete</button>
    </div>
  </div>
  );
}
export default TodoItem;