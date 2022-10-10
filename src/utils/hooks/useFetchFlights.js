import { useState, useEffect } from "react";

export function useFetchFlights(url, arrOrDep) {
  const AIRPORTS_LIST =
    "https://raw.githubusercontent.com/L1fescape/airport-codes/master/airports.json";
  const [data, setData] = useState(null);
  useEffect(() => {
    Promise.all([fetch(AIRPORTS_LIST), fetch(url)])
      .then(async ([airportDataFetch, departuresFetch]) => {
        // Incarcare date liste aeroporturi
        const airportList = await airportDataFetch.json();
        let airportsArray = [];
        airportList.forEach((airports) => {
          airportsArray.push({
            iata: airports.iata,
            city: airports.city,
          });
        });

        function getAirportCity(code) {
          let foundCity = airportsArray.find((e) => e.iata === code);

          return foundCity.city;
        }

        // incarcare date plecari
        const departuresData = await departuresFetch.json();
        let { response } = departuresData;

        // Filtrare zboruri comune_____________________________________________
        response = response.filter(
          (value, index, self) =>
            index ===
            self.findIndex(
              (t) =>
                t.arr_iata === value.arr_iata &&
                t.dep_time_ts === value.dep_time_ts
            )
        );
        //_____________________________________________________________________

        function getArrivalsOrDepartures(stateArrDep) {
          const currentHour = Math.floor(Date.now() / 1000);
          const pastTime = getHour(currentHour - 2700); //2700 sec 45 min in urma
          let numberFlightOfList = 15; // nr de zboruri afisate in lista
          let index = 0;
          let flights_array = [];

          for (let i = 0; i < response.length; i++) {
            let timeTs =
              stateArrDep === "dep"
                ? response[i].dep_time_ts
                : response[i].arr_time_ts;

            let estimatesTS =
              stateArrDep === "dep"
                ? response[i].dep_estimated_ts
                : response[i].arr_estimated_ts;

            let iata =
              stateArrDep === "dep"
                ? response[i].arr_iata
                : response[i].dep_iata;
            //console.log(iata);

            let condition2 =
              stateArrDep === "dep" ? response[i].status !== "landed" : true;

            if (
              pastTime < getHour(timeTs) &&
              condition2 &&
              index < numberFlightOfList
            ) {
              index++;

              // generare nr. poarta de imbarcare________________________________
              let letters = ["A", "B", "C", "D"];
              let gateLetter =
                letters[Math.floor(Math.random() * letters.length)];
              let gateNumber = Math.floor(Math.random() * 20);
              if (gateNumber < 10) {
                gateNumber = "0" + gateNumber;
              }
              //__________________________________________________________________
              let flight_data = {};

              flight_data = {
                std: getHour(timeTs),
                etd: getHour(estimatesTS),
                destination: getAirportCity(iata).toUpperCase(),
                flight: response[i].flight_iata,
                gate: gateLetter + gateNumber,
                remarks: response[i].status.toUpperCase(),
              };

              flights_array.push(flight_data);
            }
          }

          return flights_array;
        }

        let flights_array = getArrivalsOrDepartures(arrOrDep);

        setData(flights_array);
      })
      .catch((err) => {
        console.log("A aparut o eroare!");
        console.log(err);
      });
  }, [url, arrOrDep]);

  return data;
}

function getHour(ts) {
  if (ts === undefined) {
    return "";
  } else {
    const date = new Date(ts * 1000);

    let hours = date.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return `${hours}:${minutes}`;
  }
}
