import React from 'react'
import FormI from "./FormItemCompo";
import {useSelector} from "react-redux";

export default function FormListCompo() {
    const todoSelector = useSelector( state => state);
    // const deletedSelector = useSelector( state => state);
    // console.log(deletedSelector);
    return (
        <div className="list-parent-el">
            <div className="list-first-child">
                {/* <ul className="list-ul"> */}
                  {  todoSelector.map((item) => {
                       return  <FormI key={item.id} item={item}/>
                    })}
                    
                {/* </ul> */}
            </div>
        </div>
    )
}
