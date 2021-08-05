import { Fragment } from "react";
import Logo from "../../../Images/logo1.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <Navbar variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt="QMovies  "
              src={Logo}
              width="90"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/search">
              <div className={classes.search}>🔍</div>
            </Nav.Link>
            <Nav.Link href="/">
              <div className={classes.tabs}>HOME</div>
            </Nav.Link>
            <Nav.Link href="/movies">
              <div className={classes.active}>MOVIES</div>
            </Nav.Link>
            <Nav.Link href="/upcomings">
              <div className={classes.tabs}>UPCOMINGS</div>
            </Nav.Link>
            <Nav.Link href="/contact">
              <div className={classes.tabs}>CONTACT</div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
