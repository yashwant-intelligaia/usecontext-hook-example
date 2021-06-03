import { useReducer } from "react";
const initialCount = {
  count: 0
};

const init = (payload) => {
  return { count: initialCount.count };
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return init(initialCount);

    default:
      return state;
  }
}

export default function Header() {
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <div className="App">
      <h1>Header {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "reset", payload: initialCount });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </div>
  );
}
