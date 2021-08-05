import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../Images/logo.png";
// import Footer from "../HomePage/Footer";
import HomePage from "../HomePage/HomePage";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.division}>
        <img src={Logo} className={classes.image} alt="QMovies" />
      </div>
      <Container>
        <Row className={classes.align}>
          <Col lg={2} sm={2} />
          <Col lg={2} sm={2} className={classes.movie}>
            HOME
          </Col>
          <Col lg={2} sm={2}>
            <Link to="/movies" className={classes.link}>
              MOVIES
            </Link>
          </Col>
          <Col lg={2} sm={2}>
            <Link to="/upcomings" className={classes.link}>
              UPCOMINGS
            </Link>
          </Col>
          <Col lg={2} sm={2}>
            <Link to="/link" className={classes.link}>
              CONTACT
            </Link>
          </Col>
        </Row>
        <Row>
          <HomePage />
        </Row>
        {/* <Row>
          <Footer/>
        </Row> */}
      </Container>
    </div>
  );
};

export default Navigation;
