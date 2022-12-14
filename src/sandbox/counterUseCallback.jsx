import { useCallback, useState } from "react";

const CounterUseCallback = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(12);

  const incrementCount = () => {
    console.log("setCount");
    setCount(prev => prev + 1);
  };

  // const incrementCount = useCallback(() => {
  //   console.log("setCount");
  //   setCount(prev => prev + 1);
  // }, [setCount]);

  const incrementAge = () => {
    console.log("setAge");
    setAge(prev => prev + 1);
  };

  // const incrementAge = useCallback(() => {
  //   console.log("setAge");
  //   setAge(prev => prev + 1);
  // }, [setAge]);

  return (
    <div>
      your age is: {age} <br />
      counter num: {count}
      <button onClick={incrementCount} className="btn btn-danger m-2">
        click
      </button>
      <button onClick={incrementAge} className="btn btn-dark m-2">
        click
      </button>
    </div>
  );
};

export default CounterUseCallback;
