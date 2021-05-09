import React from "react";
import { Spinner, Container, Row, Col } from "reactstrap";

const Loading = () => {
  return (
    <Container className="themed-container d-flex flex-row">
      <Row xs="6">
        <Col>
          <Spinner color="primary" />
          <p>Fetching data...</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
