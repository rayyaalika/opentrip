import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import "../main.css";
import { ImageList, ImageListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import bri from "../assets/img/bri.png";
import gopay from "../assets/img/gopay.png";
import mandiri from "../assets/img/mandiri.png";
import master from "../assets/img/Mastercard.png";
import paypal from "../assets/img/paypal.png";
import ShopeePay from "../assets/img/ShopeePay.png";
import visa from "../assets/img/visa.png";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography gutterBottom>
        <h4 className='fw-fw-bold'>Metode Pembayaran</h4>
      </Typography>
      <Row>
        <Col>
          <ImageList variant="masonry" cols={4} gap={8}>
            <ImageListItem>
              <img
              src={ShopeePay}
              alt="BRI"
              loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
              src={gopay}
              alt="Gopay"
              loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
              src={paypal}
              alt="Paypal"
              loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
              src={mandiri}
              alt="Mandiri"
              loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Col>
      </Row>
      <Row>
        <Col>
          <ImageList variant="masonry" cols={4} gap={8}>
            <ImageListItem>
              <img
              src={bri}
              alt="BRI"
              loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
              src={visa}
              alt="Visa"
              loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
              src={master}
              alt="Mastercard"
              loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Col>
      </Row>
      <hr />
      <Row>
        <div className='text-md-start'>
          <h4>Detail Harga</h4>  
        </div>
      </Row>
      <Row>
        <div className='col'>
          <p className='text-start'>Total</p>
        </div>
        <div className='col'>
          <p className='text-end fw-bolder'>Rp.750.000,00 x 1 Orang</p>
        </div>
      </Row>
      {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="success" href='/'>
          <p>Pay</p>
        </Button>
      </Box> */}
      
    </React.Fragment>
    
  );
} 