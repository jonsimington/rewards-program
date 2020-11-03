import _ from "lodash";
import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Purchase from "./Purchase";
import prettifyMonth from "./util/prettifyMonth";

const totalPointsEarnedInMonth = (purchases) => {
  let total = 0;
  purchases.forEach((purchase) => {
    total += purchase.pointsEarned;
  });

  return total;
};

class AggregatePurchase extends Component {
  render() {
    const groupedByMonth = _.groupBy(this.props.children, "month");

    let monthTotals = {};

    // month: points earned dictionary
    for (const [month, purchases] of Object.entries(groupedByMonth)) {
      monthTotals[month] = totalPointsEarnedInMonth(purchases);
    }

    return (
      <Container>
        <Card className="mb-2" border="dark">
          <Card.Body>
            <Row className="mb-2">
              <Col>
                <h6>Customer ID</h6>
                <Card bg="light">
                  <Card.Body className="font-weight-bold">
                    {this.props.customer_id}
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <h6>Total Points Earned</h6>
                <Card bg="light">
                  <Card.Body className="text-center">
                    {this.props.pointsEarned.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Accordion defaultActiveKey="1">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} eventKey="0">
                    Show monthly breakdown for this customer
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {Object.keys(groupedByMonth).map((month, index) => (
                      <Card border="dark" className="mb-2">
                        <Card.Body>
                          <Container>
                            <Row>
                              <Col sm="9">
                                <Card
                                  bg="primary"
                                  className="text-center font-weight-bold text-white"
                                  border="primary"
                                >
                                  <Card.Body>{prettifyMonth(month)}</Card.Body>
                                </Card>
                              </Col>
                              <Col>
                                <Card
                                  bg="info"
                                  className="text-center font-weight-bold text-white"
                                  border="info"
                                >
                                  <Card.Body>
                                    {monthTotals[month]} Points
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>

                            <Accordion defaultActiveKey="1">
                              <Card>
                                <Accordion.Toggle
                                  as={Card.Header}
                                  eventKey="0"
                                  className="text-center btn"
                                >
                                  Toggle purchases for{" "}
                                  <span className="font-weight-bold">
                                    {prettifyMonth(month)}
                                  </span>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>
                                    <Row className="font-weight-bold text-center mt-3">
                                      <Col sm="2">Customer ID</Col>
                                      <Col sm="3">Date</Col>
                                      <Col sm="3">Description</Col>
                                      <Col>Total</Col>
                                      <Col>Rewards Points Earned</Col>
                                    </Row>
                                    <hr></hr>

                                    {groupedByMonth[month].map((c) => (
                                      <Purchase
                                        customer_id={c.customer_id}
                                        date={c.date}
                                        description={c.description}
                                        total={c.total}
                                        pointsEarned={c.pointsEarned}
                                      ></Purchase>
                                    ))}
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>
                            </Accordion>
                          </Container>
                        </Card.Body>
                      </Card>
                    ))}
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
