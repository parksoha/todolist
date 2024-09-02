import React, { useCallback, useState } from "react";
import "./TodoInsert.scss";

import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); //value 초기화

      //submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      //이를 방치하기 위해 이 함수를 호풀함
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="todoinsert" onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
