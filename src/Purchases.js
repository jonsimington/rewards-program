import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import AggregatePurchase from "./AggregatePurchase";
import Purchase from "./Purchase";
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
let groupedWithChildren = grouped.map((obj) => ({
  ...obj,
  children: purchaseDataWithMonthAndPoints.filter((e) => {
    return e.customer_id == obj.customer_id && e.month == obj.month;
  }),
}));

groupedWithChildren = groupedWithChildren.sort((a, b) =>
  a.customer_id > b.customer_id ? 1 : -1
);

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
