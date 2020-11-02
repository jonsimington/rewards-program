import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Purchase from "./Purchase";

class AggregatePurchase extends Component {
  render() {
    // create array of <Purchase>s  to be able to display all purchases
    const childPurchases = [];
    for (const [index, value] of this.props.children.entries()) {
      childPurchases.push(
        <Purchase
          customer_id={value.customer_id}
          date={value.date}
          description={value.description}
          total={value.total}
          pointsEarned={value.pointsEarned}
        ></Purchase>
      );
    }

    return (
      <Container>
        <Card className="mb-2">
          <Card.Body>
            <Row className="mb-2">
              <Col>
                <Card bg="light">
                  <Card.Body className="font-weight-bold">
                    {this.props.customer_id}
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card bg="light">
                  <Card.Body className="text-center">
                    {this.props.month}
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
            <Accordion defaultActiveKey="1">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} eventKey="0">
                    Show children of this grouping
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Row className="font-weight-bold text-center">
                      <Col>Customer ID</Col>
                      <Col>Date</Col>
                      <Col sm="4">Description</Col>
                      <Col>Total</Col>
                      <Col>Rewards Points Earned</Col>
                    </Row>
                    <hr></hr>
                    {childPurchases}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default AggregatePurchase;
