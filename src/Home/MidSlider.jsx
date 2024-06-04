// src/MidSlider.js
import React, { useEffect } from 'react';
import './MidSlider.css';
import image1 from '../assets/midImg1.jpg';
import image2 from '../assets/midImg2.jpg';
import image3 from '../assets/midImg3.jpg';

const MidSlider = () => {
   
    return (
        <div className="slider-container">
            <div className="slider-content">
                <img
                    src={image1}
                    alt="Testimonial"
                    className="slider-image"
                />
                <div className='Boxlines'>
                    <p className='hypebeast'>HYPEBEAST</p>
                    <p className="testimonial-text">Aiming to create gender equality</p>
                </div>
            </div>
            <div className="slider-content">
                <img
                    src={image2}
                    alt="Testimonial"
                    className="slider-image"
                />
                <div className='Boxlines'>
                    <p className='proper'> proper</p>
                    <p className="testimonial-text">More than a clothing brand</p>
                </div>
            </div>
            <div className="slider-content">
                <img
                    src={image3}
                    alt="Testimonial"
                    className="slider-image"
                />
                <div className='Boxlines'>
                    <p className='vogue'>VOGUE</p>
                    <p className="testimonial-text">You are buying into a commercial more intimate, immersive</p>
                </div>
            </div>
        </div>
    );
};

export default MidSlider;
