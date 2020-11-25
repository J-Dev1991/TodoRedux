import React from 'react';
import {addTodo} from "../redux/ActionCompo"
import {v1 as uuid} from "uuid"
import {useDispatch} from "react-redux";

export default function FormCompo({inputText,setInputText}) {

 
  let dispatch = useDispatch();

    return (<div className="form-main">
        <h1 className="title">Dev Ade's Todo form</h1>
      <div className="input-group mb-3 px-2">
      <div className="input-group-append">
        <input type="text" className="input-text form-control"  onChange={(e)=> setInputText(e.currentTarget.value)}  value={inputText} placeholder="todo text" />
      {(inputText.length > 0) ? <button  className="btn btn-primary"  onClick={()=>{ dispatch( addTodo(({ id:uuid(), name: inputText})) 
    ); setInputText('')}}>add</button>  : <button className="btn btn-primary disabled" >add</button>}
        <select className="form-control"><option>All</option><option>deleted</option><option>completed</option></select>
      

        
      </div>
    </div>
       </div>
       
    )
}
