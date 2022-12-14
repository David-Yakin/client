import useCounter from "./../hooks/useCounter";

const HookCounter = () => {
  const [counter, increment, decrement, reset] = useCounter();

  return (
    <div>
      <div className="d-flex justify-content-center mt-4">Count: {counter}</div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-outline-dark m-2" onClick={increment}>
          increment
        </button>
        <button className="btn btn-outline-dark m-2" onClick={decrement}>
          decrement
        </button>

        <button className="btn btn-outline-dark m-2" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default HookCounter;
