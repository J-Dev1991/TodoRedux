import {createStore} from "redux";
import reducer from "./ReducerCompo";

const store = createStore(reducer);

export default store;