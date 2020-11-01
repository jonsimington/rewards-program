import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Filters from "./Filters";
import Purchase from "./Purchase";
import purchaseData from "./purchaseData";

const rewardPointsEarned = (total) => {
  let pointsEarned = 0;

  // get rid of cents in total
  total = Math.floor(total);

  // 2 points for each dollar spent over $100
  if (total > 100) {
    pointsEarned += (total - 100) * 2;
  }

  // 1 point earned for each dollar spend over $50
  if (total > 50 && total > 100) {
    pointsEarned += 50;
  } else if (total > 50 && total < 100) {
    pointsEarned += total - 50;
  }

  return pointsEarned;
};

const totalRewardsPoints = () => {
  return 3;
};

const purchases = [];

for (const [index, value] of purchaseData.entries()) {
  purchases.push(
    <Purchase
      customer_id={value.customer_id}
      date={value.date}
      description={value.description}
      total={value.total}
      pointsEarned={rewardPointsEarned(value.total)}
    ></Purchase>
  );
}

class Purchases extends Component {
  render() {
    return (
      <Container fluid>
        <h1 className="text-center">
          Total Rewards Points: {totalRewardsPoints()}
        </h1>

        <Card bg="light">
          <Card.Body>
            <Container fluid>
              <Filters />
              <Accordion defaultActiveKey="1">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} eventKey="0">
                      Show all purchases
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
                      {purchases}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Purchases;
