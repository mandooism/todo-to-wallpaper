import React, { useState } from "react";
import EditInput from "./EditInput";
import { useTodoItemsStore } from "../stores/todoItemsStore";

const TodoItem = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { updateTodoItem, removeTodoItem } = useTodoItemsStore();

  const onCheckboxChange = ({ target }) => {
    const { checked } = target;
    updateTodoItem({ ...item, done: checked });
  };

  const onClickEdit = () => {
    setIsEditing(!isEditing);
  };

  const { text } = item;
  return (
    <>
      {!isEditing && (
        <div className="todo-item">
          <div className="todo-item__inner">
            <input
              className="todo-item__checkbox"
              type="checkbox"
              checked={item.done}
              onChange={onCheckboxChange}
            />
            <p className="lined">{text}</p>
          </div>
          <div className="todo-item__buttons">
            <button className="todo-item__edit" onClick={onClickEdit}>
              수정
            </button>
            <button
              className="todo-item__delete"
              onClick={() => removeTodoItem(item.id)}
            >
              삭제
            </button>
          </div>
        </div>
      )}
      {isEditing && <EditInput save={() => setIsEditing(false)} item={item} />}
    </>
  );
};

export default TodoItem;
