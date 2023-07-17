import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import './css/footer.css';
import { margin } from '@mui/system';

export default function App() {
  return (
    <MDBFooter className='text-center text-lg-left'>
      <MDBContainer className='p-5 bg_footer' >
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0 text-center'>
            <h5 className='text-uppercase'>Hubungi Kami</h5>
            {/* <ul className='ul_footer'>
                <li>(Sen - Jum 09:00 wib - 17:00 wib )</li>
                <li>Hotline : +628-11111-9558 ( Telepon / Whatsapp )</li>
                <li>Email : tripvia@gmail.com</li>
            </ul> */}
            <p>
            (Sen - Jum 09:00 wib - 17:00 wib )
            </p>
            <p>
            Hotline : +628-11111-9558 ( Telepon / Whatsapp )
            </p>
            <p>
            Email : tripvia@gmail.com
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>About Us</h5>

            <p>
            Open Trip / Trip Gabungan adalah suatu Trip / Tour yang di selenggarakan bersama - sama dengan kelompok / peserta lain di mana Tanggal Keberangkatan Telah Ditentukan dengan tidak ada batas minimum peserta ( 1 orang ) dapat bergabung Dengan Minimum Kuota Keberangkatan yang telah di tentukan oleh team penyelenggara. Dan peserta tidak dapat Reschedule tanggal keberangkatan terkecuali, permintaan khusus ( Group/Private Tour )
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          NDR Tech 2022
        </a>
      </div>
    </MDBFooter>
  );
};

