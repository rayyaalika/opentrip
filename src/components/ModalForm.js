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
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className='row text-md-start'>
              <h4>Tanggal Keberangkatan</h4>  
          </div>
          <div className='row text-sm-start'>
              <h6>Sabtu, 17 Desember 2022</h6>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='text-start'>Status</p>
            </div>
            <div className='col'>
              <p className='text-end fw-bolder'>Open</p>
            </div>
          </div>
        </div>
        <hr/>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='text-start'>Harga</p>
            </div>
            <div className='col'>
              <p className='text-end fw-bolder'>Rp.750.000,00</p>
            </div>
          </div>
        </div>
        <hr/>
        <div className='row text-sm-start'>
              <h6>Tersisa 7 Kursi dari 35 Kursi</h6>
        </div>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          <p>Jumlah Peserta</p>
        </Form.Label>
          <Col sm="3">
            <Form.Control type="number"/>
          </Col>
      </Form.Group>
        {/* <div className='container'> */}
          <div className='row'>
            <div className='col'>
              <p className='text-start fw-bolder'>Meeting Point</p>
            </div>
            <div className='col'>
              <p className='text-end fw-bolder'>Bandara I Gusti Ngurah Rai</p>
            </div>
          </div>
        {/* </div> */}
      </Modal.Body>
      <Modal.Footer>
      <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="success" href='checkout'>
            Next
          </Button>
        </Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;