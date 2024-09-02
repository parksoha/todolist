import React from "react";
import "./TodoTemplat.scss";
import TodoDay from "./TodoDay";

const TodoTemplat = ({ children }) => {
  return (
    <div className="todotemplat">
      <h1 className="app_title">Todo List</h1>
      <div className="day">
        <TodoDay />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplat;
