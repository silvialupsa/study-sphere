import React from 'react';
import ImageCarousel from "../components/mainPage/ImageCarousel";
import PartnersCarousel from "../components/mainPage/PartnersCarousel";
import splash from "../images/bg.png"
import videoBg from "../videos/video.mp4"

const WelcomePage = () => {
    return (
        <div>
            <div className="video-container">
                <video id="backgroundVideo" className="card-img" src={videoBg} autoPlay loop muted/>
                <div className="card-img-overlay m-auto position-absolute top-50 start-0">
                    {/*<h1 className="card-title fw-bold mb-3">Every Service Is NOW More Accessible Than Ever</h1>*/}
                    {/*<a className="btn btn-primary fw-bold p-3">POST Your Ads NOW FOR FREE</a>*/}
                </div>
            </div>
            <div className="content-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center welcome-container">
                            <h1>Welcome to Our School</h1>
                            <p>This is the welcome page of our school website.</p>
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
