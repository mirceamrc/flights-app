import { useReducer } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Departures from "./pages/Departures";
import Arrivals from "./pages/Arrivals";
import {
  buttonReducer,
  initialState as buttonInitialState,
} from "./store/buttonToggle/reducer";
import { ButtonContext } from "./store/buttonToggle/context";

import {
  airportReducer,
  initialState as airportInitialState,
} from "./store/airport/reducer";
import { AirportContext } from "./store/airport/context";

function App() {
  const [buttonState, buttonDispatch] = useReducer(
    buttonReducer,
    buttonInitialState
  );
  const buttonContext = {
    buttonState,
    buttonDispatch,
  };

  const [airportState, airportDispatch] = useReducer(
    airportReducer,
    airportInitialState
  );
  const airportContext = {
    airportState,
    airportDispatch,
  };
  return (
    <div>
      <AirportContext.Provider value={airportContext}>
        <ButtonContext.Provider value={buttonContext}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="departures/" element={<Departures />} />
            <Route path="arrivals/" element={<Arrivals />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </ButtonContext.Provider>
      </AirportContext.Provider>
    </div>
  );
}

export default App;
