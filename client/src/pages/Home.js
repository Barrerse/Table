import React from 'react'
import Navbar from '../components/Navbar';
import Search from '../components/Search.js';
import Recommended from '../components/Recommended.js';


const Home = () => {
  return (
    <div className="bg-[#1b2838] h-screen">

      <Navbar />
      <Search />
      <Recommended />

    <div className=""></div>
    </div>
  )
}

export default Home