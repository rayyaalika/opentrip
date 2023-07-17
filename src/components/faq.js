import React from "react";
import { Container, Card } from "react-bootstrap";
import { MDBCardText} from 'mdb-react-ui-kit';

export default function Content_Home(){
    return(
        <Container>
           <Card className='p-5'>
            <center>
            <Card.Title>FAQ</Card.Title>
            </center>
          </Card>
          <Card className='p-5'>
          <MDBCardText>
            <b>Fasilitas apa yang di dapat Peserta ?</b><br/>
            Para peserta akan mendapatkan Fasilitas sesuai dari Program Open Trip / Trip Gabungan yang telah di pilih / booking. Dan segala bentuk kondisi di lapangan bersifat kondisional dan sewaktu – waktu dapat berubah di karenakan suatu hal. Program kegiatan tidak mengikat dari adanya Program Acara yang terlampir.
          </MDBCardText>
          <MDBCardText>
            <b>Adakah waktu batas pendaftaran ?</b><br/>
            Pendaftaran akan kami buka selama kuota masih tersedia / kuota keloter ganda bertambah dengan banyaknya peminat keberangkatan.
            <br/>Reservasi anda akan kami terima apabila telah melakukan pembayaran Down Payment (DP), dengan kata lain keikut sertaaan peserta kami perioritaskan bagi mereka yang lebih dulu melakukan pembayaran.
          </MDBCardText>
          <MDBCardText>
            <b>Berapa biaya yang harus di bayarkan ?</b><br/>
            Peserta wajib membayarkan biaya Down Payment ( DP ) dengan nominal dan waktu tempo yang telah di berikan dalam Confirmation Letter setelah melakukan pendaftaran ( Booking reservasi ). Pelunasan biaya di lakukan H-2 sebelum keberangkatan. Biaya yang tertera untuk Program Opne Trip ini berlaku untuk Wisatawan Domestik. Adapun Wisatawan Mancanegara di kenakan biaya tambahan.
          </MDBCardText>
          <MDBCardText>
            <b>Bagaiman apa bila Peserta Batal Ikut serta ?</b><br/>
            Pembatalan yang di lakukan oleh pihak peserta dengan adanya suatu alasan, maka tidak ada Refund untuk biaya Down Payment ( DP ). Terkecuali di gantikan pemesanannya kepada pihak lain ( Teman, Kerabat atau Keluarga ).
          </MDBCardText>
          <MDBCardText>
            <b>Bagaimana apabila peserta kurang dari Kuota yang di tentukan ?</b><br/>
            <br/>Kegiatan wisata dalam Kategory Open Trip/ Trip Gabungan memiliki Minimum Kuota Keberangkatan, apabila Kurang Dari Kuota yang telah di tentukan pada Hari Pelaksanaan, maka peserta kami berikan 3 pilihan, diantaranya :
            <br/>• Peserta akan tetap berangkat, dengan penyesuaian harga dari jumlah peserta yang ikut serta berdasarkan kesepakatan bersama.
            <br/>• Open Trip akan kami Resechedule pada tanggal/bulan selanjutnya.
            <br/>• Biaya perjalanan anda akan kami refund sesuai kesepakatan.
            <br/>• Segala beban biaya diluar dari Paket Tour seperti, Tiket Penerbanga, Kereta, Pemesanan Hotel maka di tanggung oleh pihak peserta dan Ladita Tour tidak di bebankan untuk mengganti berupa apapun.
          </MDBCardText>
          <MDBCardText>
            <b>Apakah sanksi jika terlambar hadir ?</b><br/>
            Peserta yang mengikuti Program Open Trip yang telah membayarkan Down Payment ( Dp ) maka di nyatakan mengerti dengan seluruh sanksi-sanksi dalam butiran Syarat  dan Ketentuan termasuk adanya sanksi keterlambatan kehadiran.
          </MDBCardText>
          </Card>
        </Container>
    )
}