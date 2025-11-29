import React from "react";
import "../styles/theme.css";
import Input from "./Input";
import TodoItem from "./TodoItem";

const Theme1 = ({ todoItems }) => {
  return (
    <div className="todo">
      <div className="todo__inner">
        <div className="todo-items">
          <Input />
          {todoItems.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theme1;
