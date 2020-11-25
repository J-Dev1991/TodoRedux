import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { deleteTodo, editTodo } from "../redux/ActionCompo";
export default function FormItemCompo({ item }) {
  const [editText, setEditText] = React.useState(false);
  const [name, setName] = React.useState(item.name);

  //we use dispatch to activate our func
  const dispatch = useDispatch();
  return (
    <>
      <div className="form-item-parent-div">
        <li>
          {editText ? (
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control update-text"
              placeholder="update todo"
            />
          ) : (
            <p className="para">{item.name}</p>
          )}

          <span className="span-wrap">
            <span>
              {editText ? (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    dispatch(
                      editTodo({
                        ...item,
                        name: name,
                      })
                    );
                    setEditText(!editText);
                  }}
                >
                  Update
                </button>
              ) : (
                <span onClick={() => setEditText(!editText)}>
                  <AiFillEdit />
                </span>
              )}
            </span>
            <span onClick={() => dispatch(deleteTodo(item.id))}>
              <AiFillDelete />
            </span>
          </span>
        </li>
      </div>
    </>
  );
}
// onClick={() => dispatch(editTodo((item.id)))}
