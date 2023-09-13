import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from "../components/ImageCarousel";
import PartnersCarousel from "../components/PartnersCarousel";

const WelcomePage = () => {
    return (
        <div className="container"  backgroundColor="red">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h1>Welcome to Our School</h1>
                    <p>This is the welcome page of our school website.</p>
                    <Link to="/students" className="btn btn-primary">Go to Student List</Link>
                    <Link to="/grades" className="btn btn-primary">Go to Grade List</Link>
                    <Link to="/schools" className="btn btn-primary">Go to School List</Link>
                    <Link to="/inspectorates" className="btn btn-primary">Go to Inspectorates List</Link>
                    <Link to="/parents" className="btn btn-primary">Go to Parent List</Link>
                    <Link to="/professors" className="btn btn-primary">Go to Professor List</Link>
                    <ImageCarousel/>
                    <PartnersCarousel/>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
