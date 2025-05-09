import React from 'react';

const MissionAndVision = () => {
    return (
        <div>
            <section
                className="text-white  py-16 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,145,255,0.7)), url('/path-to-your-image/mission.png')",
                }}
            >
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    {/* Mission */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg">
                            Our mission is to create innovative solutions that empower individuals and businesses to succeed. We strive to deliver exceptional value with cutting-edge technology, focusing on quality, collaboration, and continuous improvement.
                        </p>
                    </div>

                    {/* Vision */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg">
                            Our vision is to lead the way in technological innovation, creating impactful solutions that drive progress and transform industries. We aim to inspire growth, foster creativity, and shape a future where technology enriches lives and businesses..
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MissionAndVision;