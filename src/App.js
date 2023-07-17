import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar.js';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
// import "./App.css";


function App(){
    return (
        <div className="App">
           <Sidebar/>
           <Navbar />
           <Header />
           <br/>
           <div className='Content'>
            <Content/>
           </div>
           <br/>
           <div className='Footer'>
            <Footer/>
           </div>
        </div>
    );

}

export default App;