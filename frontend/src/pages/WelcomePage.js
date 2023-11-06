import React from 'react';
import ImageCarousel from "../components/mainPage/ImageCarousel";
import PartnersCarousel from "../components/mainPage/PartnersCarousel";
import videoBg from "../videos/video.mp4"
import Button from "react-bootstrap/Button";
import NavBar from "../components/mainPage/NavBar";

const WelcomePage = () => {
    return (
        <div>
            <NavBar/>
            <div className="video-container">
                <video id="backgroundVideo" className="card-img" src={videoBg} autoPlay loop muted/>
                <div className="card-img-overlay m-auto position-absolute top-50 start-0">
                    <h1 className="card-title fw-bold mb-3 welcome-text">Your Integrated School Platform</h1>
                    <div className="d-flex justify-content-center">
                        <Button className="get-button get-started mx-3">
                            Get started
                        </Button>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center welcome-container">
                            <ImageCarousel/>
                            <PartnersCarousel/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
