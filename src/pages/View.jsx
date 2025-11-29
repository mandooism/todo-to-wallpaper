import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/view.css";
import TodoItemView from "../components/TodoItemView";

const View = () => {
  const { state } = useLocation();

  return (
    <div className="view__todo__outer">
      <div className="view__todo">
        <div className="view__todo__inner">
          <div className="view__todo-items">
            {state.map((todoItem) => (
              <TodoItemView key={todoItem.id} item={todoItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
