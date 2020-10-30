import Card from "react-bootstrap/Card";

function Purchase(props) {
    return (
        <Card>
            <Card.Body>
                {props.name} - {props.total} - {props.pointsEarned}
            </Card.Body>
        </Card>
    );
}

export default Purchase;
