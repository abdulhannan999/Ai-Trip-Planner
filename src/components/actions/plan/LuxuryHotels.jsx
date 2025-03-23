import React from "react";

const LuxuryHotels = ({ hotels }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hotels?.map((hotel, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-4">
          <img 
            src="/pic.jpg" 
            alt={hotel.hotelName} 
            className="w-full h-48 object-cover rounded-lg mb-4" 
          />
          <h2 className="text-xl font-bold mb-2">{hotel.hotelName}</h2>
          <p className="text-gray-600 mb-2">{hotel.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">{hotel.priceUSD}$</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LuxuryHotels;
