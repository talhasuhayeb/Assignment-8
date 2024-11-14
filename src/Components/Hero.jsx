import React from 'react';

const Hero = () => {
    return (
        <>
      {/* Header */}
      <header className="bg-purple-700 text-white py-8">
        <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold">Upgrade Your Tech Accessorize with Gadget <br /> Heaven Accessories</h1>
          <p className="mt-2 text-sm">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
          </p>
          <button className="mt-4 bg-white text-purple-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="container mx-auto mt-8">
        <div className="flex justify-center">
          <img
            src="/public/assets/banner.jpg"
            alt="VR Headset"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
    );
};

export default Hero;