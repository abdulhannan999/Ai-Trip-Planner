import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { handleError } from "../toast/Notification";

const genAI = new GoogleGenerativeAI("AIzaSyAt4e1tRtshEnfDfEp06pP3oz9OTEkPT9c");

const generationConfig = {
  temperature: 0.9,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];

const generateFallbackData = (days) => ({
  hotelOptions: Array(3)
    .fill()
    .map((_, i) => ({
      hotelName: `Hotel ${i + 1} (Placeholder)`,
      image: "https://example.com/placeholder-hotel.jpg",
      description: "Premium accommodation with excellent amenities",
      priceRange: "$$$",
    })),
  itineraryPlan: Array.from({ length: days }, (_, i) => `day${i + 1}`).reduce((acc, day) => {
    acc[day] = {
      morning: "Morning activity details",
      afternoon: "Afternoon exploration",
      evening: "Evening relaxation",
    };
    return acc;
  }, {}),
});

export const generateTrip = async (form, setTripData, navigate, setLoading) => {
  if (!form.Destination || !form.Days || !form.Budget || !form.Travellingpartner) {
    return setTimeout(() =>{
      handleError()
      console.log("helloo")
    }, 0);
 // Stops execution after showing the error
}
  setLoading(true);

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig,
      safetySettings,
    });

    const chatSession = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: `Generate COMPLETE travel plan JSON. Example format: ${JSON.stringify(generateFallbackData(form.Days))}`,
            },
          ],
        },
      ],
    });

    const prompt = `Generate a trip plan for:
      - Destination: ${form.Destination}
      - Duration: ${form.Days} days
      - Budget: ${form.Budget}
      - Travelers: ${form.Travellingpartner}
      - Include 3 hotels & daily itinerary`;

    const result = await chatSession.sendMessage(prompt);
    const text = result.response.text();

    const jsonString = text.replace(/(```json|```)/gi, "").trim();

    let data;
    try {
      data = JSON.parse(jsonString);
      const isValid = data?.hotelOptions?.length >= 3 && Object.keys(data?.itineraryPlan || {}).length >= form.Days;

      if (!isValid) throw new Error("Response missing required elements");
    } catch (parseError) {
      console.warn("Using fallback data:", parseError);
      data = generateFallbackData(form.Days);
    }

    setTripData(data);
    navigate("/Trip-plan");
  } catch (error) {
    console.error("Generation Error:", error);
    setTripData(generateFallbackData(form.Days));
    alert("Showing sample itinerary");
    navigate("/Trip-plan");
  } finally {
    setLoading(false);
  }
};
