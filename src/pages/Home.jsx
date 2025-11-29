import React from "react";
import { Link } from "react-router-dom";
import Theme1 from "../components/Theme1";
import { useTodoItemsStore } from "../stores/todoItemsStore";

const Home = () => {
  const { todoItems } = useTodoItemsStore();

  return (
    <>
      <Theme1 todoItems={todoItems} />
      <Link to="/view" state={todoItems}>
        <button className="bagel-fat-one">Capture!</button>
      </Link>
    </>
  );
};

export default Home;
