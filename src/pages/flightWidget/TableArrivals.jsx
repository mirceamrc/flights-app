import { useContext } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { AirportContext } from "../../store/airport/context";

function TableArrivals() {
  const { airportState } = useContext(AirportContext);

  const arrivals = airportState.airport[0].depOrArr;
  const airport = airportState.airport[0].iata;

  return (
    <table>
      <TableHead arrOrDep={arrivals} />
      <TableBody arrOrDep={arrivals} airport={airport} />
    </table>
  );
}

export default TableArrivals;
