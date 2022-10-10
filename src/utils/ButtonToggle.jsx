import React, { useState, useContext } from "react";
import "./buttonToggle.css";
import { useNavigate } from "react-router-dom";
import { ButtonContext } from "../store/buttonToggle/context";
import {
  changeToDepartures,
  changeToArrivals,
} from "../store/buttonToggle/actions";

export default function ButtonToggle() {
  const [isEnabled, setIsEnabled] = useState(false);
  const { buttonState, buttonDispatch } = useContext(ButtonContext);

  const navigate = useNavigate();

  // const changeButtonHandler = () => {
  //   setIsEnabled((prevState) => !prevState);
  //   isEnabled ? navigateDepartures() : navigateArrivals();
  // };

  const changeButtonHandler = () => {
    if (buttonState.button === "departures") {
      const actionResult = changeToArrivals();
      buttonDispatch(actionResult);
      setIsEnabled(true);
      navigateArrivals();
    } else {
      const actionResult = changeToDepartures();
      buttonDispatch(actionResult);
      setIsEnabled(false);
      navigateDepartures();
    }
  };

  const navigateDepartures = () => {
    navigate("/departures");
  };
  const navigateArrivals = () => {
    navigate("/arrivals");
  };

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div
        className={`toggle ${
          buttonState.button === "arrivals" ? "enabled" : "disabled"
        }`}
      >
        <div className="icons">
          <i className="fas fa-plane-arrival"></i>
          <i className="fas fa-plane-departure"></i>
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isEnabled}
          onChange={changeButtonHandler}
        />
      </div>
    </label>
  );
}
