import React, {useRef, useState} from 'react';
import EditInput from "./EditInput";
import {useTodoItemsStore} from "../stores/todoItemsStore"

const TodoItem = ({item}) => {
    const {done, text} = item;
    return (
        <div className="view__todo-item">
            <input className="view__todo-item__checkbox" type="checkbox" defaultChecked={item.done}/>
            <p className="view__lined">{text}</p>
        </div>
    );
};

export default TodoItem;
