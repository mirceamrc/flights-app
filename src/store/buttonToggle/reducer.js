export const initialState = {
  button: "departures",
};

export function buttonReducer(state, actionResult) {
  switch (actionResult.type) {
    case "CHANGE_TO_DEPARTURES": {
      const newState = {
        button: "departures",
      };
      return newState;
    }
    case "CHANGE_TO_ARRIVALS": {
      const newState = {
        button: "arrivals",
      };
      return newState;
    }
    case "CHANGE": {
      const newState = {
        button: actionResult.payload,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
