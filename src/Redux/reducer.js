import { DECREMENT, DIVISION, INCREMENT, MULTIPLICATION } from "./actionType";

const initState = {
  count: 0
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + Number(payload)
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - payload
      };

    case MULTIPLICATION:
      return {
        ...state,
        count: state.count * payload
      };

    case DIVISION:
      return {
        ...state,
        count: state.count / payload
      };

    default:
      return {
        ...state,
        count: 0
      };
  }
};
