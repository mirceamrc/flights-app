import React, { useContext, useEffect } from "react";
import styles from "./DepArr.module.css";
import TableDepartures from "./flightWidget/TableDepartures";
import { ButtonContext } from "../store/buttonToggle/context";
import { changeToDepartures } from "../store/buttonToggle/actions";
import { AirportContext } from "../store/airport/context";

function Departure() {
  const { buttonDispatch } = useContext(ButtonContext);
  const { airportState } = useContext(AirportContext);

  useEffect(() => {
    return buttonDispatch(changeToDepartures());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`${styles.bdy} bg-dark`}>
      <div className={`${styles.departures}`}>
        <div className={`${styles.headerDep}`}>
          <h1>
            <i className="fas fa-plane-departure"></i> Departures
          </h1>
          <h1>
            {airportState.airport.length > 0 ? (
              <div>{airportState.airport[0].airportName}</div>
            ) : (
              <p>&#160;&#160; Return to home for search an airport! </p>
            )}
          </h1>
          {airportState.airport.length > 0 && (
            <h1>{new Date().toLocaleString() + ""}</h1>
          )}
        </div>
        {airportState.airport.length > 0 && <TableDepartures />}
      </div>
    </div>
  );
}

export default Departure;
