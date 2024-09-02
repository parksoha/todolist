import React from "react";
import "./TodoDay.scss";

const TodoDay = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(today.getDate()).padStart(2, "0"); // 2자리로 맞추기

  // 원하는 형식으로 조합
  const formattedDate = `${year}.${month}.${day}`;

  return (
    <div className="tododay">
      <div></div>
      <p>{formattedDate}</p>
      <div></div>
    </div>
  );
};

export default TodoDay;
