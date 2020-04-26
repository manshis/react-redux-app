import React from 'react';
import {Link} from "react-router-dom";


const HomePage = () => (
    <div className="jumbotron">
    <h1>React and Redux application</h1>
    <p>It will cover React with Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
        Learn more 
    </Link>
    </div>
);

export default HomePage;