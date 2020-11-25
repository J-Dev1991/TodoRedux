export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const  EDIT_TODO = 'EDIT_TODO';

export const addTodo = (todo) => {
return {
    type: ADD_TODO,
    payload: todo
}
 
}

export const deleteTodo = (todoId) => {
return{
    type: DELETE_TODO,
    payload: todoId
}
}

export const editTodo = (todoId) => {
    return {
        type: EDIT_TODO,
        payload: todoId
    }

}


