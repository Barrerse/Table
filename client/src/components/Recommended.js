import React, { useState } from "react";
import gaming from "../assets/holder.png";
import gaming1 from "../assets/holder1.png";
import gaming2 from "../assets/holder2.png";
import gaming3 from "../assets/holder3.png";
import gaming4 from "../assets/holder4.png";
import { TbApps } from "react-icons/tb";
import { searchGamesAPI } from "../utils/searchTest.js";

const Recomended = () => {
  const [mainImage, setMainImage] = useState(gaming);

  const handleImageHover = (imgSrc) => {
    setMainImage(imgSrc);
  };

  const handleImageMouseOut = () => {
    setMainImage(gaming);
  };

  window.onload = async (event) => {

      const response = await searchGamesAPI();
   if (!response.ok){
     throw new Error("Something went wrong");
   }
   const {games} = await response.json();

   const gamesData = games.map((game) => ({
     name: game.name,
     photo: game.image_url
   }));

   console.log(gamesData);
  }

  return (
    <div className="mx-[2rem] mt-[2rem] text-white text-[14px] overflow-hidden">
      {/* Title */}
      <p>FEATURED</p>

      {/* Featured */}
      <div className="h-full md:h-[24rem] w-full flex flex-col  md:flex-row pt-3">
        <div className="w-full md:w-[62%] h-full bg-red-400 flex ">
        <img src={mainImage} alt="Board game main" className="object-cover w-full transition-image" />
        </div>
        <div className="bg-[#0f1922] h-full w-full md:w-[38%] flex  flex-col justify-between ">
          <div className="  flex flex-col  items-center">
            <p className="text-[30px] mt-3">Name</p>
            <div className="px-4 w-full h-[24rem] md:h-[15rem] pt-3">
              <div className="h-[40%]   w-full flex pb-1 ">
                <img
                  src={gaming1}
                  alt=""
                  className="object-cover w-[50%] pr-1 "
                  onMouseOver={() => handleImageHover(gaming1)}
                  onMouseOut={handleImageMouseOut}
                />
                <img
                  src={gaming2}
                  alt=""
                  className="object-cover w-[50%] pl-1"
                  onMouseOver={() => handleImageHover(gaming2)}
                  onMouseOut={handleImageMouseOut}
                />
              </div>
              <div className="h-[40%]  w-full flex pt-1 ">
                <img
                  src={gaming3}
                  alt=""
                  className="object-cover w-[50%] pr-1"
                  onMouseOver={() => handleImageHover(gaming3)}
                  onMouseOut={handleImageMouseOut}
                />
                <img
                  src={gaming4}
                  alt=""
                  className="object-cover w-[50%] pl-1"
                  onMouseOver={() => handleImageHover(gaming4)}
                  onMouseOut={handleImageMouseOut}
                />
              </div>
              <div className=" flex flex-col items-center md:items-start  ">
                <p className="text-[22px] pt-4">Buy Now</p>
                <div className="bg-[#8cc414] w-[6rem] rounded-[0.5rem] mt-1">
                  <p className="text-[15px] text-center">Discount</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-between pr-4 gap-4 md:gap-0 -mt-4 md:mt-0 pb-2 md:pb-0">
            <div className="pl-4 pb-2 ">
              {/* Todo: Add price using API  */}
              <p className="text-[20px] md:text-[12px]">PRICE</p>
            </div>
            <TbApps className="text-[25px] md:text-[19px]   mb-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
