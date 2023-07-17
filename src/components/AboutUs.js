import React from "react";
import { Container } from "react-bootstrap";
import '../main.css'
import { Card } from "react-bootstrap";
// import 'react-bootstrap/dist/react-bootstrap.min.js';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import img1 from '../assets/Labuan Bajo.jpg';
// import bromo from '../assets/Lombok.jpg';
// import Button from "react-bootstrap/Button";
// import ModalForm from "./ModalForm";

import './css/content.css';

function about() {
    return (
        <Container>
            <Card className='p-5'>
            <center>
            <Card.Title>About Us</Card.Title>
            </center>
          </Card>
        <div className="content_div">
            <p><b>Tripvia </b>the most beautiful expression that our face can make. Receiving smile from those whom you served well, that is one of the most beautiful gifts one can ever have. That is how Smailing Tour came to be. 
            With a strong desire and passion to serve every customer well and make them left with smile on their faces, You can contact us through our 24-hours service, or visit us in our 8 branch offices in Central Jakarta. We served both companies and individual alike.
            </p>
        </div>
        <div>
            <p>
            Open Trip / Trip Gabungan adalah suatu Trip / Tour yang di selenggarakan bersama - sama dengan kelompok / peserta lain di mana Tanggal Keberangkatan Telah Ditentukan dengan tidak ada batas minimum peserta ( 1 orang ) dapat bergabung Dengan Minimum Kuota Keberangkatan yang telah di tentukan oleh team penyelenggara. Dan peserta tidak dapat Reschedule tanggal keberangkatan terkecuali, permintaan khusus ( Group/Private Tour )
            </p>
        </div>
        </Container>
        );
}

export default about;


