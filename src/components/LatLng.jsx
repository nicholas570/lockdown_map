import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { Row, Col, Form, Button } from 'react-bootstrap';

function LatLng() {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [displayFailToast, setDisplayFailToast] = useState(false);
  const [displaySuccessToast, setDisplaySuccessToast] = useState(false);
  const history = useHistory();

  const successNotify = () =>
    toast.dark('🔥🔥🔥 Get ready', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const failNotify = () =>
    toast.error('🤦‍♂️🤦‍♂️🤦‍♂️ DAMN!!! Enter your coordinates', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = new RegExp(
      /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/
    );
    const latLng = `${lat}, ${lng}`;
    if (regex.test(latLng)) {
      const coords = {
        latitude: parseFloat(lat.split(',').join('.'), 10),
        longitude: parseFloat(lng.split(',').join('.'), 10),
      };

      setDisplaySuccessToast(true);
      successNotify();
      setTimeout(() => {
        history.push({
          pathname: '/map',
          state: coords,
        });
      }, 2000);
    } else {
      setDisplayFailToast(true);
      failNotify();
    }
  };

  return (
    <Row>
      <Col className="p-5 bg-light">
        <Form onSubmit={handleSubmit}>
          <p className="font-italic">Enter your coords</p>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="text"
              name="lat"
              placeholder="40.737"
              onChange={(e) => setLat(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              type="text"
              name="lng"
              placeholder="-73.923"
              onChange={(e) => setLng(e.target.value)}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Go
          </Button>
        </Form>
      </Col>
      {displayFailToast && (
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
      {displaySuccessToast && (
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
    </Row>
  );
}

export default LatLng;
