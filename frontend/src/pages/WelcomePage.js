import React from 'react';
import ImageCarousel from "../components/mainPage/ImageCarousel";
import PartnersCarousel from "../components/mainPage/PartnersCarousel";
import splash from "../images/bg.png"
const WelcomePage = () => {
    return (
        <div className="container"  backgroundColor="red">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h1>Welcome to Our School</h1>
                    <p>This is the welcome page of our school website.</p>
                    <ImageCarousel/>
                    <PartnersCarousel/>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;


