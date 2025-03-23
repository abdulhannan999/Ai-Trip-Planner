import React, { useContext, useState } from "react";
import { TripContext } from "../context/TripContext";
import { useNavigate } from "react-router";
import TripForm from "./TripForm";
import { generateTrip } from "./TripGenerator";

const CreateTrip = () => {
  const { form, setForm, setTripData } = useContext(TripContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preference</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Provide some basic information for your customized travel plan.
      </p>

      <TripForm form={form} setForm={setForm} />

      <button
        className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        onClick={() => generateTrip(form, setTripData, navigate, setLoading)}
        disabled={loading}
      >
        {loading ? "Generating Plan..." : "Generate Trip Plan"}
      </button>
    </div>
  );
};

export default CreateTrip;
