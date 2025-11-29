import React from "react";
import EditInput from "./EditInput";

const TodoItem = ({ item }) => {
  return (
    <div className="view__todo-item">
      <input
        className="view__todo-item__checkbox"
        type="checkbox"
        defaultChecked={item.done}
      />
      <p className="view__lined-p hi-melody">{item.text}</p>
    </div>
  );
};

export default TodoItem;
