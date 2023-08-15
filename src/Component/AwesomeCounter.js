import { useState } from "react";

const AwesomeCounter = ({ initialValue }) => {

  const [count, setCount] = useState(initialValue ?? 0);
  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const remove = () => {
    setCount((prevCount) => {
      const result = prevCount - 1;
      if (result < 0) {
        return 0;
      }
      return result;
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Awesome Counter</h1>
      <div style={{ textAlign: "center" }}>
        <button onClick={remove}>Remove</button>
        <span style={{ padding: "20px" }}>{count}</span>
        <button onClick={add}>Add</button>
      </div>

    </div>
  );
};

export default AwesomeCounter;
