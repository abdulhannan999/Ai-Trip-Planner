import React, { useState, useEffect } from "react";

const TripItinerary = ({ itineraryPlan }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [days, setDays] = useState([]);

  useEffect(() => {
    if (itineraryPlan) {
      const dayKeys = Object.keys(itineraryPlan);
      setDays(dayKeys);
      setSelectedDay(dayKeys[0] || "");
    }
  }, [itineraryPlan]);

  return (
    <div className="max-w-4xl mx-auto">
      {days.length > 0 && (
        <div className="mb-6">
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="p-2 border rounded-lg w-full md:w-1/2"
          >
            {days.map((day, index) => (
              <option key={index} value={day}>
                {`Day ${index + 1}`}
              </option>
            ))}
          </select>
        </div>
      )}

      {itineraryPlan[selectedDay] && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-6">
            {Object.entries(itineraryPlan[selectedDay]).map(([time, activity], index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold capitalize">{time}</h3>
                <p className="text-gray-600 mt-1">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TripItinerary;
