import { useState } from "react";

const SetFunction = () => {
  const [count, setCount] = useState(0);

  const changeNum = (term = "") => {
    if (term === "increment") return setCount(count => count + 1);
    if (term === "decrement") return setCount(count => count - 1);
    setCount(0);
  };

  return (
    <div className="d-flex justify-content-center mt-2">
      <div>
        <div className="mx-2 text-center mb-2">{`Number: ${count}`}</div>

        <button
          onClick={() => changeNum("increment")}
          className="btn btn-outline-dark">
          +
        </button>

        <button
          onClick={() => changeNum("decrement")}
          className="btn btn-outline-dark mx-2">
          -
        </button>

        <button onClick={changeNum} className="btn btn-outline-dark">
          reset counter
        </button>
      </div>
    </div>
  );
};

export default SetFunction;
