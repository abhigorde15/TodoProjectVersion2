import { useContext } from 'react';
import TodoItem from './TodoItem';
import {TodoItemContext} from '../store/todo-item-store';
function TodoItems(){
  const todoItemObj = useContext(TodoItemContext)
  const todoItems = todoItemObj.TodoItems;
  return (<>
    {todoItems.map(item=> <TodoItem item={item} key={item.task}></TodoItem>)}
    </>
  )
}
export default TodoItems;