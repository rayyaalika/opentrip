import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../main.css"

function ModalForm(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Pesanan Berhasil</h4>
        <p>
          Silahkan nikmati liburan anda.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button href='/'>Home</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;