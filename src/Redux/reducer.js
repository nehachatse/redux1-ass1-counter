import { DECREMENT, INCREMENT } from "./actionType";

const initState = {
  count: 0
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + payload
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - payload
      };

    default:
      return state;
  }
};
