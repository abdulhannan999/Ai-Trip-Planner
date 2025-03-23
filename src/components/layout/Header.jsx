import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
    const Navigate= useNavigate();
    return (
        <div>
 <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">


        <a onClick={()=>{
Navigate("/")

        }} className="flex title-font font-medium items-center cursor-pointer text-gray-900 mb-4 md:mb-0" >
        
        <img src="/logo.svg" />
        <span className="ml-3 text-xl">AI Trip Planner</span>
        
        </a>
 

    
    {/* <button className="inline-flex items-center h-[200] bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0">
      Sign In
    
    </button> */}
  </div>
</header>

        </div>
    );
}

export default Header;
