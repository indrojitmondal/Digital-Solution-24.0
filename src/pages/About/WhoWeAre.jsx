import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left Side - Title */}
      <div className="text-center md:text-right">
        <h2 className="text-6xl font-bold leading-none">
          <span className="text-primary block">WHO</span>
          <span className="text-gray-900 block">WE</span>
          <span className="text-gray-900 block">ARE</span>
        </h2>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-40 bg-primary"></div>

      {/* Right Side - Description */}
      <div className="max-w-xl text-center md:text-left text-gray-800 text-lg leading-7">
        <p>
        Digital Solution 24.0 is a modern software company focused on crafting high-quality web, mobile, and custom software solutions. We blend technical excellence with innovative thinking to help startups and businesses thrive in a digital-first world. From clean UI design to scalable backend systems, our team is committed to building reliable and impactful products that solve real-world problems.
          </p>
        <p className="mt-4">
        Since our launch, we've collaborated with a wide range of companies—helping startups, growing businesses, and established enterprises across the United States and Canada achieve meaningful operational improvements.</p>
      </div>
    </section>
  );
};

export default WhoWeAre;
