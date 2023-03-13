import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    
    
    <div className="bg-[#171a21]">
        {/* // left _side */}
        <div className="flex items-center text-white font-semibold text-[30px] py-4">
            <img src={logo} alt="table logo" className="w-12 h-12 mr-2" />  
            <p>BOARD GAMES</p>
        </div>
        
        
        {/* // center */}
    </div>
  )
}

export default Navbar