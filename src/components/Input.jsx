import React, { useRef } from "react";
import { useTodoItemsStore } from "../stores/todoItemsStore";

const Input = () => {
  const { addTodoItem } = useTodoItemsStore();

  const textareaRef = useRef(null);
  const onButtonClick = (e) => {
    if (textareaRef.current.value.trim().length === 0) return;
    e.preventDefault();
    addTodoItem(textareaRef.current.value.trim());
    textareaRef.current.value = "";
  };

  return (
    <div className="input">
      <button onClick={onButtonClick} className="input__button" type="button">
        +
      </button>
      <textarea ref={textareaRef} className="lined" rows="2" cols="5" />
    </div>
  );
};

export default Input;
