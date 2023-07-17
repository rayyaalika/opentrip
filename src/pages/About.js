import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar.js";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
    return (
        <div className="App">
           <Sidebar/>
           <Navbar />
           <br/>
           <div className='faq'>
            <AboutUs/>
           </div>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <div className='Footer'>
            <Footer/>
           </div>
        </div>
    );
}

export default About;
