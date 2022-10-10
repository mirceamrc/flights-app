import { useContext } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { AirportContext } from "../../store/airport/context";

function TableDepartures() {
  const { airportState } = useContext(AirportContext);

  const departures = airportState.airport[0].depOrArr;
  const airport = airportState.airport[0].iata;

  return (
    <table>
      <TableHead arrOrDep={departures} />
      <TableBody arrOrDep={departures} airport={airport} />
    </table>
  );
}

export default TableDepartures;
