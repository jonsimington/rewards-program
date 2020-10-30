import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Purchase extends Component {
  render() {
    return (
      <Container>
        <Row className="mb-2">
          <Col sm={7}>
            <Card>
              <Card.Body>{this.props.name}</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>{this.props.total}</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>{this.props.pointsEarned}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Purchase;
