import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Fragment>
      <Container>
        <Row className={classes.marigin}>
          <Col lg={4} />
          <Col lg={4} className={classes.content}>
            <h2 >Book Tickets Now</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={3} />
          <Col lg={6}>
            <div className={classes.detail}>
              QMovies is an online database of information related to films,
              television programs, home videos, video games, and streaming
              content online, including cast, production crew, personal
              biographies, plot summaries, trivia, ratings, and fan critical
              reviews. It is an Indian Startup headquartered in Ahmedabad,
              Gujarat.
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HomePage;
