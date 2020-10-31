import { Container } from 'react-bootstrap';

import LatLng from '../components/LatLng';

function Home() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 bg-dark"
    >
      <LatLng />
    </Container>
  );
}

export default Home;
