//@ts-check
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./ActionCompo";
// import { deletedTodo } from "./StateCompo";

const todos = [
  {
    name: "ajibola",
    id: 1,
  },
  {
    name: "adeola",
    id: 2,
  },
  {
    name: "damola",
    id: 3,
  },
];

const reducer = (state = todos, action) => {
  const cases = {
    [ADD_TODO]: () => [...state, action.payload],

    [DELETE_TODO]: () => state.filter((todo) => todo.id !== action.payload),

    [EDIT_TODO]: () => {
      const itemIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );

      //Did not find the item, return original state
      if (itemIndex === -1) {
        return state;
      }

      const newTodos = [...state];
      newTodos[itemIndex] = action.payload;
      return newTodos;
    },
  };

  return cases[action.type] ? cases[action.type]() : state;

  // switch (action.type) {
  //   case ADD_TODO:
  //     return [...state, action.payload];

  //   case DELETE_TODO:
  //     return state.filter((todo) => todo.id !== action.payload);

  //   case EDIT_TODO:
  //     const itemIndex = state.findIndex(
  //       (todo) => todo.id === action.payload.id
  //     );

  //     //Did not find the item, return original state
  //     if (itemIndex === -1) {
  //       return state;
  //     }

  //     const newTodos = [...state];
  //     newTodos[itemIndex] = action.payload;
  //     return newTodos;
  // }

  // return state;
};

export default reducer;
