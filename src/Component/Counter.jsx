import React from "react";
import { decrementCounter, incrementCounter } from "../Redux/action";
import { store } from "../Redux/store";

export default function Counter() {
  const [state, setState] = React.useState(0);

  console.log("in counter = ", store.getState());
  const count = store.getState().count;

  const handleAdd = () => {
    store.dispatch(incrementCounter(1));
    forceUpdate();
  };

  const handleMinus = () => {
    store.dispatch(decrementCounter(1));
    forceUpdate();
  };

  const forceUpdate = () => {
    setState((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}
