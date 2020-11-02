import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AggregatePurchase from "./AggregatePurchase";
import Filters from "./Filters";
import Purchase from "./Purchase";
import purchaseData from "./purchaseData";

// given a total amt spent, returns the number of rewards points earned by that purchase
const rewardPointsEarned = (total) => {
  let pointsEarned = 0;

  // get rid of cents in total to not give fractional points
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

// groups an array by groupKeys properties, and sums on sumKeys properties
function groupAndSum(arr, groupKeys, sumKeys) {
  return Object.values(
    arr.reduce((acc, curr) => {
      const group = groupKeys.map((k) => curr[k]).join("-");
      acc[group] =
        acc[group] ||
        Object.fromEntries(
          groupKeys.map((k) => [k, curr[k]]).concat(sumKeys.map((k) => [k, 0]))
        );
      sumKeys.forEach((k) => (acc[group][k] += curr[k]));
      return acc;
    }, {})
  );
}

const totalRewardsPoints = () => {
  return 3;
};

// create array of <Purchase>s  to be able to display all purchases
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

// add month and pointsEarned properties to purchaseData
const purchaseDataWithMonthAndPoints = purchaseData.map((obj) => ({
  ...obj,
  month: obj.date.slice(0, 7), // assumes date is in yyyy-mm-dd format
  pointsEarned: rewardPointsEarned(obj.total),
}));

// group by customer_id and month, and aggregate pointsEarned
const grouped = groupAndSum(
  purchaseDataWithMonthAndPoints,
  ["customer_id", "month"],
  ["pointsEarned"]
);

// adds children property to grouped array to show which purchases are in the group
const groupedWithChildren = grouped.map((obj) => ({
  ...obj,
  children: purchaseDataWithMonthAndPoints.filter((e) => {
    return e.customer_id == obj.customer_id && e.month == obj.month;
  }),
}));

// create array of <AggregatePurchase>s  to be able to display the grouped data
const aggregatePurchases = [];
for (const [index, value] of groupedWithChildren.entries()) {
  aggregatePurchases.push(
    <AggregatePurchase
      customer_id={value.customer_id}
      month={value.month}
      pointsEarned={value.pointsEarned}
      children={value.children}
    ></AggregatePurchase>
  );
}

console.log(groupedWithChildren);

class Purchases extends Component {
  render() {
    return (
      <Container fluid>
        <h1 className="text-center">
          Total Rewards Points: {totalRewardsPoints()}
        </h1>

        <Card bg="light">
          <Card.Body>
            {aggregatePurchases}
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
