import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./style.module.css";
import Shoping_card_pascet from "../../eCommerce/Shoping_card_pascet/Shoping_card_pascet";
import { Link, NavLink } from "react-router-dom";
const { Nabare, bt } = style;
function Header() {
  return (
    <header>
      <div className={bt}>
        <Link to="/">
          <h3>
            <span>
              Eo <Badge color="info">Commorece</Badge>
            </span>
          </h3>
        </Link>
        <div>
          <Shoping_card_pascet />
        </div>
      </div>
      <Navbar
        expand="lg"
        className={Nabare}
        bg="dark"
        data-bs-theme="dark"
        color="weight"
      >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/CateGrayes">
                CateGrayes
              </Nav.Link>

              <Nav.Link as={NavLink} to="/AboutUs">
                AboutUs
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/SignUp">
                SignUp
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
