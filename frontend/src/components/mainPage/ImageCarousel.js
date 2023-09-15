import React from "react";
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';

const ImageCarousel = () => {
    return (
        <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <img src={image1} className="d-block w-100" alt="Image 1 Description" />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={image2} className="d-block w-100" alt="Image 2 Description" />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={image3} className="d-block w-100" alt="Image 3 Description" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default ImageCarousel;
