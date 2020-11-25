import {ADD_TODO, DELETE_TODO, EDIT_TODO} from "./ActionCompo";
import {todos,deletedTodo} from "./StateCompo";


const reducer = (state = todos, action) =>{
  let todo;
  let deletedcart;
  let newTodo;
  let payloadEdit;
switch(action.type){

    case ADD_TODO:
          todo = [...state];
            todo.push(action.payload);
       return todo;
       
        case DELETE_TODO:
            todo = [...state];
             todo.filter((todo) => todo.id !== action.payload);
            //  deletedcart = [todo];
            //  console.log(deletedcart);
            return todo;
        
            case EDIT_TODO:
              todo = [...state];
              let indexNum = -1;
              for(let i = 0; i < todo.length; i++){
                indexNum++;
                if(todo[i].id === action.payload.id){
                  break;
                }
              }

              if(indexNum !==  -1){
                todo[indexNum] = action.payload;
                return todo;
              }
             return todo;
// console.log(todo);

}

return state;
}

export default reducer;