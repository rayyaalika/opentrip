// import { React from 'react';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./../components/Signin"

function login() {
    return (
        <div className="App">
            <div className='login'>
                <Login />
            </div>
        </div>
    );
}

export default login;