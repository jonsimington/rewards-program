import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Purchase(props) {
  return (
    <Container>
      <Row className="mb-2">
        <Col sm={7}>
          <Card>
            <Card.Body>{props.name}</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>{props.total}</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>{props.pointsEarned}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Purchase;
