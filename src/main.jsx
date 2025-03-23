

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // ✅ Correct import
import App from './App.jsx'
import CreateTrip from './components/actions/trip/CreateTrip.jsx'
import Header from './components/layout/Header.jsx'
import { TripProvider } from './components/actions/context/TripContext.jsx'
import ViewResults from './components/actions/plan/ViewResults.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header /> {/* ✅ Move Header inside routes */}
        <App />
      </>
    ),
  },
  {
    path: "/create-trip",
    element: (
      <>
        <Header />
        <CreateTrip />
      </>
    ),
  },
  {
    path: "/Trip-plan",
    element: (
      <>
        <Header />
        <ViewResults />
      </>
    ),
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TripProvider>
      <RouterProvider router={router} />
    </TripProvider>
  </StrictMode>
);
