import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../assets/Labuan Bajo.jpg';
import Lombok from '../assets/Lombok.jpg';
import Button from "react-bootstrap/Button";
import ModalForm from "./ModalForm";

import './css/content.css';

function GridExample() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
      <div className="content_div">
        <p className="content_h1"><b>Tripvia </b>the most beautiful expression that our face can make. Receiving smile from those whom you served well, that is one of the most beautiful gifts one can ever have. That is how Smailing Tour came to be. 
        With a strong desire and passion to serve every customer well and make them left with smile on their faces, You can contact us through our 24-hours service, or visit us in our 8 branch offices in Central Jakarta. We served both companies and individual alike.
        </p>
      </div>
      <br/>
      <br/>
      <Row xs={1} md={2} className="g-4">
        {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Labuan Bajo</Card.Title>
                <Card.Text>
                <Button variant="success" onClick={() => setModalShow(true)}>
                  Book Now
                </Button>

                <ModalForm
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src={Lombok} />
              <Card.Body>
                <Card.Title>Lombok</Card.Title>
                <Card.Text>
                <Button variant="success" onClick={() => setModalShow(true)}>
                  Book Now
                </Button>

                <ModalForm
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        {/* ))} */}
      </Row>
    </Container>
  );
}

export default GridExample;