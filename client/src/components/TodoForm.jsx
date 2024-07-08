import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


function TodoForm(){
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    function onFormSubmit(e){
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    function onInputChange(e){
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
    )
}

export default TodoForm;