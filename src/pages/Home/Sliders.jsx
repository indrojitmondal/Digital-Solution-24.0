import React from 'react';
import slide1 from '../../assets/hero-carousel/first.png';
import slide2 from '../../assets/hero-carousel/second.png';
import slide3 from '../../assets/hero-carousel/third.png';
import slide4 from '../../assets/hero-carousel/fourth.png';


const Sliders = () => {
    return (
        <div>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={slide1}
                        className="w-full h-screen" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                         src={slide2}
                       
                       className="w-full h-screen" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                         src={slide3}
                       className="w-full h-screen" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={slide4}
                       className="w-full h-screen" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default Sliders;