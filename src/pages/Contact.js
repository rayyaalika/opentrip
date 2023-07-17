import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "./../components/ContactUs"
import Footer from "./../components/Footer"
import Navbar from "./../components/Navbar"
import Sidebar from "./../components/Sidebar.js"
import "../App.css";

function Contact() {
    return (
        <div className="App">
        <Sidebar/>
        <Navbar />
        <br/>
        <div className='faq'>
         <ContactUs/>
        </div>
        <br/>
        <div className='Footer'>
         <Footer/>
        </div>
     </div>
    );
}

export default Contact;