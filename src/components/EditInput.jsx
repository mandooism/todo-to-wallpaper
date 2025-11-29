import React, {useState, useRef} from 'react';
import {useTodoItemsStore} from "../stores/todoItemsStore"

const EditInput = ({item, save}) => {
    const {updateTodoItem, removeTodoItem} = useTodoItemsStore();

    const textareaRef = useRef(null);
    const onButtonClick = (e) => {
        e.preventDefault();
        save();
    }
    const onTextareaChange = ({target}) => {
        updateTodoItem({...item, text: target.value});
    }


    return (
        <div className="input">
            <button onClick={onButtonClick} className="input__button" type="button">+</button>
            <textarea ref={textareaRef} className="lined" rows="2" cols="5" value={item.text} onChange={onTextareaChange}/>
        </div>
    );
};

export default EditInput;
