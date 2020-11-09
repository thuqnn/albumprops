import React from "react";
import PropTypes from "prop-types";

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
    <ul>
      {todoList.map((
        todo //map để lấy từng phần tử
      ) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
