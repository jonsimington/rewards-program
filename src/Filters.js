import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Filters extends Component {
  render() {
    return (
      <Card bg="info" className="mb-2">
        <Container>
          <Row>
            <Col sm>Filter by Customer</Col>
            <Col sm>Filter by Month</Col>
          </Row>
        </Container>
      </Card>
    );
  }
}

export default Filters;
