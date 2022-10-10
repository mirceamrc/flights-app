import React from "react";
import { useFetchFlights } from "../../utils/hooks/useFetchFlights";
import { getFlightsEndpoint } from "../../api/endpoints";
import TableRow from "./TableRow";

function TableBody({ arrOrDep, airport }) {
  const flightsUrl = getFlightsEndpoint(arrOrDep, airport);
  const getFlights = useFetchFlights(flightsUrl, arrOrDep);

  return (
    <tbody>
      {getFlights?.map((flight, _index) => (
        <TableRow key={_index} flight={flight} />
      ))}
    </tbody>
  );
}

export default TableBody;
