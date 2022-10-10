import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import styles from "./Home.module.css";
import { useFetch } from "../utils/hooks/useFetch";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AirportContext } from "../store/airport/context";
import { addAirport } from "../store/airport/actions";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { airportDispatch } = useContext(AirportContext);

  const AIRPORTS_LIST =
    "https://raw.githubusercontent.com/L1fescape/airport-codes/master/airports.json";
  const airportName = useFetch(AIRPORTS_LIST);

  const navigate = useNavigate();

  const clickHandlerArrivals = (airport) => {
    const airportToAdd = {
      airportName: airport.name,
      iata: airport.iata,
      depOrArr: "arr",
    };
    const actionResult = addAirport(airportToAdd);
    airportDispatch(actionResult);
    navigate("/arrivals");
  };

  const clickHandlerDepartures = (airport) => {
    const airportToAdd = {
      airportName: airport.name,
      iata: airport.iata,
      depOrArr: "dep",
    };
    const actionResult = addAirport(airportToAdd);
    airportDispatch(actionResult);
    navigate("/departures");
  };

  const airportList = airportName?.filter((element) => {
    return element.iata !== "";
  });

  const handleChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    const results = airportList?.filter(
      (o) =>
        o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.iata.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className={`${styles.body} bg-dark text-light `}>
      <Container>
        <br />
        <br />
        <div className="d-flex flex-column align-items-center">
          <h4 className="">
            Find airport (by name, city, country or iata code) :
          </h4>

          <div>
            <input
              type="text"
              size="68"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Enter an airport"
            />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center align-items-center flex-wrap text-dark">
          {searchResults &&
            searchResults.slice(0, 9).map((item) => (
              <div className="">
                <Card
                  key={item.id}
                  style={{ width: "25rem", padding: "10px" }}
                  className="m-3 "
                >
                  <div>
                    Airpot Name: {item.name} ({item.iata})
                  </div>
                  <div></div>
                  <div>City: {item.city}</div>
                  <div>Country: {item.country}</div>
                  <div>Latitude: {item.latitude}</div>
                  <div>Longitude: {item.longitude}</div>
                  <div className="d-flex justify-content-between">
                    <Button
                      onClick={() => {
                        clickHandlerArrivals(item);
                      }}
                      className="p-1 m-1 w-50"
                      variant="secondary"
                    >
                      Arrivals
                    </Button>
                    <Button
                      onClick={() => {
                        clickHandlerDepartures(item);
                      }}
                      className="p-1 m-1 w-50"
                      variant="secondary"
                    >
                      Departures
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
