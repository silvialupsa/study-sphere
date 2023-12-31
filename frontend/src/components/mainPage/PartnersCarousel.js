import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/british-school-logo.jpg';
import image2 from '../../images/montessori-logo.jpg';
import image3 from '../../images/international-school-logo.jpg';
import image4 from '../../images/nsc-logo.jpg';
import image5 from '../../images/praise-logo.jpg';
import image6 from '../../images/southgate-school-logo.jpg';
import image7 from '../../images/tonbridge-logo.jpg';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7
];

const partnerImageStyle = {
    width: '200px',
    height: '150px',
    objectFit: 'cover',
};

function PartnersCarousel() {
    const partnerItems =
        images.map((image, index) => (
        <Carousel.Item key={index}>
            <a href="#">
                <img
                    src={image}
                    alt={`Image${index + 1}`}
                    style={partnerImageStyle}
                />
            </a>
        </Carousel.Item>
    ));

    return (
        <div className="partnersCarousel">
            <a>Our partners</a>
            <Carousel>{partnerItems}</Carousel>
        </div>
    );
}

export default PartnersCarousel;
