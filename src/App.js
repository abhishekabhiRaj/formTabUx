import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormTab from "./component/Form";

function App() {
  return (
    <Container>
      <Row>
        <Col md={12} className="mx-auto">
          <FormTab />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
