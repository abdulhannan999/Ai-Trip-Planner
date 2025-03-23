import React, { useContext, useState } from "react";
import { TripContext } from "../context/TripContext";
import LuxuryHotels from "./LuxuryHotels";
import TripItinerary from "./TripItinerary";


const ViewResults = () => {
  const { tripData, form } = useContext(TripContext);
  const [activeTab, setActiveTab] = useState("hotels");

  if (!tripData) {
    return <div className="text-center mt-10">No trip data available. Generate a trip first.</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">{form.Destination} Luxury Travel Plan</h1>

      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 ${activeTab === "hotels" ? "bg-blue-500 text-white" : "bg-gray-300"} rounded-lg`}
          onClick={() => setActiveTab("hotels")}
        >
          Luxury Hotels
        </button>
        <button
          className={`px-4 py-2 mx-2 ${activeTab === "itinerary" ? "bg-blue-500 text-white" : "bg-gray-300"} rounded-lg`}
          onClick={() => setActiveTab("itinerary")}
        >
          Itinerary
        </button>
      </div>

      {activeTab === "hotels" ? <LuxuryHotels hotels={tripData.hotelOptions} /> : <TripItinerary itineraryPlan={tripData.itineraryPlan} />}
    </div>
  );
};

export default ViewResults;
