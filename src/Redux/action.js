import { INCREMENT, DECREMENT, MULTIPLICATION, DIVISION } from "./actionType";

export const incrementCounter = (payload) => ({
  type: INCREMENT,
  payload
});

export const decrementCounter = (payload) => ({
  type: DECREMENT,
  payload
});

export const multiplyCounter = (payload) => ({
  type: MULTIPLICATION,
  payload
});

export const divideCounter = (payload) => ({
  type: DIVISION,
  payload
});

export const setCounter = (payload) => ({
  type: "set_counter",
  payload
});
