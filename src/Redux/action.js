import { INCREMENT, DECREMENT } from "./actionType";

export const incrementCounter = (payload) => ({
  type: INCREMENT,
  payload
});

export const decrementCounter = (payload) => ({
  type: DECREMENT,
  payload
});
