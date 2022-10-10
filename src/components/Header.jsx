import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ButtonToggle from "../utils/ButtonToggle";

function Header() {
  return (
    <header className="bg-dark">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/" className="p-3 ">
            <img
              src="https://seeklogo.com/images/F/flight-logo-C4668B20DB-seeklogo.com.png?v=637955565310000000"
              alt="flight logo"
              style={{ width: 60 }}
            />
          </Link>
          <div className="text-uppercase text-light">
            <h2>Find your flight</h2>
          </div>
        </div>

        <div>
          <ButtonToggle />
        </div>
      </Container>
    </header>
  );
}

export default Header;
