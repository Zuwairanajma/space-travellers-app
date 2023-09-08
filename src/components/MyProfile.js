import { useSelector } from 'react-redux';
import {
  Container, ListGroup, Row, Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/rockets.css';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);

  const myRockets = rockets.RocketList.filter(
    (rocket) => rocket.reserved === true,
  );
  if (myRockets.length === 0) {
    return (
      <Col style={{ marginTop: '10px' }}>
        <h3>My Rockets</h3>
        You have not reserved any rockets.
      </Col>
    );
  }
  return (
    <Col style={{ marginTop: '10px' }}>
      <h3>My Rockets</h3>
      <ListGroup as="ol">
        {myRockets.map((rocket) => (
          <ListGroup.Item as="li" key={rocket.id}>
            {rocket.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

const Mission = () => {
  const { missions } = useSelector((store) => store.missions);

  const myMissions = missions.filter((item) => item.reserved);
  if (myMissions.length === 0) {
    return (
      <Col style={{ marginTop: '10px' }}>
        <h3>My Missions</h3>
        <p>You have not reserved any missions.</p>
      </Col>
    );
  }
  return (
    <Col style={{ marginTop: '10px' }}>
      <h3>My Missions</h3>
      <ListGroup as="ol">
        {myMissions.map((item) => (
          <ListGroup.Item as="li" key={item.id}>
            {item.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

const MyProfile = () => (
  <Container>
    <Row>
      <Mission />
      <Rocket />
    </Row>
  </Container>
);

export default MyProfile;
