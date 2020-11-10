import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};
//biết cách render nhưng không có dữ liệu
function TodoList(props) {
  //nhận props chứa dữ liệu todoList
  const { todoList } = props;
  return (
    <ul className="todolist">
      {todoList.map((
        todo //map để lấy từng phần tử
      ) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed", //add class completed if status bang completed
          })}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
