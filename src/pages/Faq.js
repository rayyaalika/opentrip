import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQ from "./../components/faq";
import Sidebar from '../components/Sidebar.js';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function faq(){
    return (
        <div>
           <Sidebar/>
           <Navbar />
           <br/>
           <div className='faq'>
            <FAQ/>
           </div>
           <br/>
           <div className='Footer'>
            <Footer/>
           </div>
        </div>
    );

};
export default faq;