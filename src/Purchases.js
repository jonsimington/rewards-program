import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import AggregatePurchase from "./AggregatePurchase";
import purchaseData from "./purchaseData";
import groupAndSum from "./util/groupAndSum";

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

// add pointsEarned property to purchaseData
const purchaseDataWithPoints = purchaseData.map((obj) => ({
  ...obj,
  pointsEarned: rewardPointsEarned(obj.total),
}));

// group by customer_id, and aggregate pointsEarned
const groupedByCustomer = groupAndSum(
  purchaseDataWithPoints,
  ["customer_id"],
  ["pointsEarned"]
);

// adds children property to grouped array to show which purchases are in each group
// sorts results by customer_id asc
const groupedWithChildren = groupedByCustomer
  .map((obj) => ({
    ...obj,
    children: purchaseDataWithPoints
      .filter((e) => {
        return e.customer_id === obj.customer_id;
      })
      .map((obj) => ({ ...obj, month: obj.date.slice(0, 7) })),
  }))
  .sort((a, b) => (a.customer_id > b.customer_id ? 1 : -1));

// create array of <AggregatePurchase>s  to be able to display the grouped data
const aggregatePurchases = [];
for (const [index, value] of groupedWithChildren.entries()) {
  aggregatePurchases.push(
    <AggregatePurchase
      customer_id={value.customer_id}
      pointsEarned={value.pointsEarned}
      children={value.children}
      key={`${value.customer_id}${value.pointsEarned}`}
    ></AggregatePurchase>
  );
}

class Purchases extends Component {
  render() {
    return (
      <Container fluid>
        <Card bg="light">
          <Card.Body>{aggregatePurchases}</Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Purchases;
