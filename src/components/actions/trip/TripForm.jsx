import React from "react";
import { BudgetList, TravelList } from "../../../utils/Options";

const TripForm = ({ form, setForm }) => {
  return (
    <div className="mt-20">
      <div>
        <h2 className="text-xl my-3 font-medium">Destination</h2>
        <input
          className="h-10 sm:w-[600px] w-full border rounded border-gray-500 p-2"
          type="text"
          value={form.Destination}
          onChange={(e) => setForm({ ...form, Destination: e.target.value })}
        />
      </div>

      <div className="mt-6">
        <h2 className="text-xl my-3 font-medium">Trip Duration (Days)</h2>
        <input
          className="h-10 sm:w-[600px] w-full border rounded border-gray-500 p-2"
          type="number"
          value={form.Days}
          onChange={(e) => setForm({ ...form, Days: e.target.value })}
        />
      </div>

      <div className="mt-6">
        <h2 className="text-xl my-3 font-medium">Budget</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {BudgetList.map((x) => (
            <div
              key={x.title}
              className={`p-4 cursor-pointer border rounded-lg transition-shadow ${
                form.Budget === x.title ? "border-blue-500 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => setForm({ ...form, Budget: x.title })}
            >
              <img src={x.icon} alt={x.title} className="h-20 w-full object-contain" />
              <h3 className="font-bold mt-2">{x.title}</h3>
              <p className="text-sm text-gray-600">{x.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl my-3 font-medium">Travel Companions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TravelList.map((x) => (
            <div
              key={x.title}
              className={`p-4 cursor-pointer border rounded-lg transition-shadow ${
                form.Travellingpartner === x.title ? "border-blue-500 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => setForm({ ...form, Travellingpartner: x.title })}
            >
              <img src={x.icon} alt={x.title} className="h-20 w-full object-contain" />
              <h3 className="font-bold mt-2">{x.title}</h3>
              <p className="text-sm text-gray-600">{x.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripForm;
