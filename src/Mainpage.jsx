import React from 'react';
import pizza from './assets/pizza.jpeg';

const Mainpage = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${pizza})` }}
    >
      {/* Overlay for background opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-45" /> 
      
      {/* Content container */}
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center pl-10"
      >
        <div className="text-center md:text-left md:w-1/2">
          {/* Main Heading */}
          <h1 className="text-white text-3xl md:text-6xl mb-4 font-sans font-bold">
            The Best Place to
          </h1>
          <h1 className="text-white text-3xl md:text-6xl mb-4 font-sans font-bold">
            Satisfy your <span className='pt-6'> 
            Cravings </span>
          </h1>

          {/* Sub Heading */}
          <h2 className="text-yellow-400 text-xl md:text-2xl mb-4 pb-8">
            Special Pizza
          </h2>

          {/* Order Now Button and Price */}
          <div className="flex items-center justify-center md:justify-start">
            <button
              className="bg-red-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-lg md:text-xl font-semibold hover:bg-red-600"
              onClick={() => console.log('Order now clicked!')}
            >
              Order Now
            </button>

            <p className="text-white text-2xl md:text-3xl ml-6 md:ml-12 font-bold">
              Rs. 1800
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
