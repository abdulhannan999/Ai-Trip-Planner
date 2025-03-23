// import { createContext, useContext, useState } from "react";
// // Create the context

// // Provider component
// export const TripProvider = ({ children }) => {
//     const [form, setForm] = useState({
//         Destination: "",
//         Days: "",
//         Budget: "",
//         Travellingpartner: ""
//     });

//     return (
//         <TripContext.Provider value={{ form, setForm }}>
//             {children}
//         </TripContext.Provider>
//     );
// };


import { createContext, useContext, useState } from "react";

// Create Context
export const TripContext = createContext();

// Provider Component
export const TripProvider = ({ children }) => {
    const [form, setForm] = useState({
        Destination: "",
        Days: "",
        Budget: "",
        Travellingpartner: ""
    });

    const [tripData, setTripData] = useState([]); // Store generated trip data

    return (
        <TripContext.Provider value={{ form, setForm, tripData, setTripData }}>
            {children}
        </TripContext.Provider>
    );
};
