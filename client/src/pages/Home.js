import React from 'react'
import Navbar from '../components/Navbar';
import Search from '../components/Search.js';
import Recommended from '../components/Recommended.js';
import Footer from '../components/Footer.js';
// import SpecialOffers from '../components/SpecialOffers.js';

const Home = () => {
  return (
    <div className="bg-[#1b2838] h-screen">

      <Navbar />
      <Search />
      <Recommended />
      {/* <SpecialOffers /> */}
      <Footer />

    <div className=""></div>
    </div>
  )
}

export default Home