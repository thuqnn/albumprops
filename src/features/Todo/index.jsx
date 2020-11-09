import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};
//chứa dữ liệu nhưng không biết cách render
function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ];
  return (
    <div>
      <h3>
        <TodoList todoList={todoList} />
      </h3>
    </div>
  );
}

export default TodoFeature;
//ENTRY POIN
// todoList (props) = {todoList (array data)}
