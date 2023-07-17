import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function form() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="First name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Last name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Subject</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="outline-primary" type="submit">
        Send
        </Button>

      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
  );
}

export default form;