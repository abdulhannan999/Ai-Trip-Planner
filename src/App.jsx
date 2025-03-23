import React from 'react';
import Hero from './components/layout/Hero';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  return (
    
    <div>
      <ToastContainer
      
      position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

      />
<Hero/>    </div>
  );
}

export default App;
