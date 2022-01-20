import React from "react";
import {
  decrementCounter,
  divideCounter,
  incrementCounter,
  multiplyCounter,
  setCounter
} from "../Redux/action";
import { store } from "../Redux/store";

export default function Counter() {
  const [state, setState] = React.useState(0);
  const [value, setValue] = React.useState(0);

  console.log("in counter = ", store.getState());
  const count = store.getState().count;

  const forceUpdate = () => {
    setState((prev) => prev + 1);
  };

  const handleReset = () => {
    store.dispatch(setCounter(0));
    forceUpdate();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    store.dispatch(incrementCounter(value));
    forceUpdate();
  };

  const handleMinus = () => {
    store.dispatch(decrementCounter(value));
    forceUpdate();
  };

  const handleMul = () => {
    store.dispatch(multiplyCounter(value));
    forceUpdate();
  };

  const handleDiv = () => {
    store.dispatch(divideCounter(value));
    forceUpdate();
  };

  return (
    <div>
      <div>
        <h3>Answer:</h3> <h1>{count}</h1>
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter number"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div style={{ display: "grid", gap: 5, padding: 13 }}>
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleMinus}>SUBRACT</button>
        <button onClick={handleMul}>MULTIPLY</button>
        <button onClick={handleDiv}>DIVISION</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
}
