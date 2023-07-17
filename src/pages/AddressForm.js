import * as React from 'react';
import Typography from '@mui/material/Typography';
import Form from 'react-bootstrap/Form';
import "../main.css";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography gutterBottom>
        <h4 className='fw-fw-bold'>Data Peserta</h4>
      </Typography>
      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <p>Nama Lengkap</p>
              </Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <p>Email</p>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <p>No Handphone</p>
              </Form.Label>
              <Form.Control 
              type="text"/>
            </Form.Group>
        </Form>
    </React.Fragment>
  );
}