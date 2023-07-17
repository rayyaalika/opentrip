import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Button, Modal, Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function ArtikelPage() {
  const [artikelList, setArtikelList] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/api/get").then((response) => {
      //console.log(response.data);
      setArtikelList(response.data);
    });
  }, []);

  const submitArtikel = () => {
    Axios.post("http://localhost:3000/api/create", {
      judul: judul,
      isi: isi,
    });
    //alert("Berhasil Insert");
    setArtikelList([...artikelList, { judul: judul, isi: isi }]);
    window.location.reload();
  };

  const deleteArtikel = (id) => {
    Axios.delete(`http://localhost:3000/api/delete/${id}`);
    window.location.reload();
  };

  return (
    <div className="App">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Tambah Artikel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Judul:</label>
          <input
            type="text"
            name="judul"
            onChange={(e) => {
              setJudul(e.target.value);
            }}
          />
          <label>Isi:</label>
          <input
            type="text"
            name="isi"
            onChange={(e) => {
              setIsi(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              submitArtikel();
              handleClose();
            }}
          >
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
      <Container fluid="md">
        <row>
          <h3
            style={{
              textAlign: "center",
            }}
          >
            Data Artikel
          </h3>
        </row>
        <div className="form">
          <br />
          <Button variant="primary" size="sm" onClick={handleShow}>
            Tambah Artikel
          </Button>
          <br />
          <br />

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Judul</th>
                <th>Isi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {artikelList.map((val) => {
                return (
                  <tr>
                    <td>{val.judul}</td>
                    <td>{val.isi}</td>
                    <td>
                      <Button
                        as={Link}
                        to={`/artikel/edit/${val.id}`}
                        variant="warning"
                        size="sm"
                        className="me-2"
                      >
                        Ubah
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => {
                          deleteArtikel(val.id);
                        }}
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                );
            })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default ArtikelPage;


