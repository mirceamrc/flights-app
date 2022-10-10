export const initialState = {
  airport: [],
};
export function airportReducer(state, actionResult) {
  switch (actionResult.type) {
    case "ADD_AIRPORT": {
      const newAirport = actionResult.payload;
      const newState = {
        airport: [newAirport],
      };
      return newState;
    }

    default:
      return state;
  }
}
