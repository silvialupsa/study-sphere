import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h1>Welcome to Our School</h1>
                    <p>This is the welcome page of our school website.</p>
                    <Link to="/students" className="btn btn-primary">Go to Student List</Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
