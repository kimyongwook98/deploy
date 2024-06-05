import React from "react";
import useStore from "../store/store.js";

const Counter = () => {
  const { count, increase, decrease } = useStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
};

export default Counter;
