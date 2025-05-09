import React from 'react';

const BannerForAbout = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/h1TrT85Z/about-Banner.png)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">We are <br /> Digital Solution 24.0</h1>
                        <p className="mb-5">
                            A Software Solution Provider
                        </p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerForAbout;