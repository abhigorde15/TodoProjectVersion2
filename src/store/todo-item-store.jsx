import { Children, createContext } from "react";
import { useReducer } from "react";
export const TodoItemContext = createContext({
  TodoItems : [],
  addNewItem : ()=>{},
  DeleteItem : ()=>{},
  });

  const TodoItemContextProvider = ({children})=>{
    
    const todoItemReducer =(curTodoItems,action)=>{
      let newTodoItems = curTodoItems;
      if(action.type =='NEW_ITEM'){
         newTodoItems =[
          ...curTodoItems,{
            task : action.payload.itemName,
            dueDate : action.payload.dueDate
          }
         ];
      }
      else if(action.type == 'DELETE_ITEM'){
        newTodoItems = curTodoItems.filter(item=> item.task !== action.payload.itemName);
     
      }
      return newTodoItems;
    }
    //let [TodoItems,setTodoItems ]= useState(initialTodoItems);
    let [TodoItems,dispatchTodoItems] = useReducer(todoItemReducer,[]);
    const handleNewItem = (itemName,dueDate)=>{
      // let newTodoItems = [...TodoItems,{
      //   task : itemName,
      //   dueDate : dueDate
      // }]
      // setTodoItems(newTodoItems);
  
      const newItemAction ={
        type : 'NEW_ITEM',
        payload :{
          itemName,
          dueDate
        }
      };
      dispatchTodoItems(newItemAction);
    }
    let handleDeleteClick = (itemName)=>{
      // let newTodoItem = TodoItems.filter(item=> item.task !== itemName);
      // setTodoItems(newTodoItem);
      const deleteItemAction ={
        type : 'DELETE_ITEM',
        payload :{
          itemName,
          
        }
      };
      dispatchTodoItems(deleteItemAction);
    }
    return <TodoItemContext.Provider value={{
      TodoItems : TodoItems,
      addNewItem : handleNewItem,
      DeleteItem : handleDeleteClick,
      }}>
{children}
      </TodoItemContext.Provider>
  }
  export default TodoItemContextProvider;