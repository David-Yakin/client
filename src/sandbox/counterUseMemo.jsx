import { useMemo, useState } from "react";

const CounterUseMemo = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(12);

  const incrementCount = () => {
    console.log("setCount");
    setCount(prev => prev + 1);
  };

  const incrementAge = () => {
    console.log("setAge");
    setAge(prev => prev + 1);
  };

  const isEven = useMemo(() => count % 2 === 0, [count]);
  //   const isEven = count % 2 === 0;

  return (
    <div>
      your age is: {age} <br />
      counter num: {count} <br />
      is even: {isEven ? "Even" : "Odd"} <br />
      <button onClick={incrementCount} className="btn btn-danger m-2">
        click
      </button>
      <button onClick={incrementAge} className="btn btn-dark m-2">
        click
      </button>
    </div>
  );
};

export default CounterUseMemo;
