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
          <Col sm="2">
            <Card bg="light">
              <Card.Body className="font-weight-bold text-center">
                {this.props.customer_id}
              </Card.Body>
            </Card>
          </Col>
          <Col sm="3">
            <Card bg="light">
              <Card.Body className="text-center">{this.props.date}</Card.Body>
            </Card>
          </Col>
          <Col sm="3">
            <Card bg="light">
              <Card.Body className="text-center">
                {this.props.description}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light">
              <Card.Body className="text-center">
                $
                {this.props.total.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light">
              <Card.Body className="text-center">
                {this.props.pointsEarned}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Purchase;
