export function changeToDepartures() {
  return {
    type: "CHANGE_TO_DEPARTURES",
  };
}

export function changeToArrivals() {
  return {
    type: "CHANGE_TO_ARRIVALS",
  };
}

export function change(button) {
  return {
    type: "CHANGE",
    payload: button,
  };
}
