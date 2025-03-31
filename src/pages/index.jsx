import React from "react";
import Login from './Login';
import Register from './Register';
import './index.css';

function IndexPage() {
    return (
        <div className="container">
            <div className="form-wrapper">
                <Login />
                <Register />
            </div>
        </div>
    );
}

export default IndexPage;
