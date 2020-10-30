import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Purchase from "./Purchase";
import purchaseData from "./purchaseData";

const rewardPointsEarned = (total) => {
  return 2;
};

const purchases = [];

for (const [index, value] of purchaseData.entries()) {
  purchases.push(
    <Purchase
      name={value.name}
      total={value.total}
      pointsEarned={rewardPointsEarned(value.total)}
    ></Purchase>
  );
}

function Purchases(props) {
  return (
    <Card className="bg-light">
      <Card.Body>
        <Container fluid>
          <Row className="font-weight-bold text-center">
            <Col sm={7}>Name</Col>
            <Col>Total</Col>
            <Col>Rewards Points Earned</Col>
          </Row>
          <hr></hr>
          {purchases}
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Purchases;
