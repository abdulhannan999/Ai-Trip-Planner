const { GoogleGenerativeAI } = require("@google/generative-ai");
export const TripContext = createContext();
const {form}=useContext(TripContext)
const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


const prompt = `
Generate a detailed travel plan for a ${form.Travellingpartner} visiting ${form.Destination} for ${form.Days} on a ${form.Budget} budget. The response should be in JSON format and include the following details:

1. Hotel Options (Budget-Friendly)  
Each hotel should have:  
- hotelName: Name of the hotel  
- address: Full hotel address  
- price: Cost per night  
- imageUrls: An array of exactly 3 image URLs.  
  - The first image should be a direct image URL of the hotel.  
  - The remaining two should be alternate images related to budget hotels or ${form.Destination}, regardless of the first image's validity.  
- geoCoordinates: Latitude & longitude as { "latitude": value, "longitude": value }  
- googleMapsLink: A direct Google Maps link to the hotel location  
- rating: Average customer rating  
- description: A short summary of the hotel  

2. Itinerary Plan (${form.Days})  
Each day should include multiple places to visit with:  
- placeName: Name of the attraction  
- placeDetails: A brief description of the place  
- imageUrls: An array of exactly 3 image URLs.  
  - The first image should be a direct image URL of the attraction.  
  - The remaining two should be alternate images related to ${form.Destination} attractions, regardless of the first image's validity.  
- geoCoordinates: Latitude & longitude as { "latitude": value, "longitude": value }  
- googleMapsLink: A direct Google Maps link to the attraction location  
- ticketPricing: Cost per person or mention if free  
- timeToTravel: Approximate travel time from the previous location  
- bestTimeToVisit: The recommended time to visit  
    `;

const result = await model.generateContent(prompt);
console.log(result.response.text());