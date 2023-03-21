import gaming from "../assets/holder.png";
import gaming1 from "../assets/holder1.png";
import gaming2 from "../assets/holder2.png";
import gaming3 from "../assets/holder3.png";
import gaming4 from "../assets/holder4.png";
import { TbApps } from "react-icons/tb";
import { useState } from "react";

const Recomended = () => {
  const [mainImage, setMainImage] = useState(gaming);

  return (
    <div className="mx-4 mt-4 text-white text-sm md:text-base overflow-hidden">
      {/* Title */}
      <p className="text-2xl font-bold">RECOMMENDED & FEATURED</p>

      {/* Featured */}
      <div className="flex flex-col md:flex-row md:pt-3">
        <div className="w-full md:w-3/5 h-72 md:h-auto bg-red-400">
          <img
            src={mainImage}
            alt="Board game main"
            className="object-cover w-full h-full transition-image"
            style={{ maxHeight: "100%", objectFit: "cover"}}
          />
        </div>
        <div className="bg-[#0f1922] w-full md:w-2/5 flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-4xl mt-3">Name of Game</p>
            <div className="px-4 w-full h-48 md:h-full pt-3">
              {/* one half of the image */}
              <div className="h-1/2 w-full flex pb-1">
                <img
                  src={gaming1}
                  alt=""
                  className="object-cover w-1/2 pr-1"
                  // onMouseOver={() => setMainImage(gaming1)}
                  // onMouseOut={() => setMainImage(gaming)}
                />
                <img
                  src={gaming2}
                  alt=""
                  className="object-cover w-1/2 pl-1"
                  // onMouseOver={() => setMainImage(gaming2)}
                  // onMouseOut={() => setMainImage(gaming)}
                />
              </div>
              {/* second half of the image */}
              <div className="h-1/2 w-full flex pt-1">
                <img
                  src={gaming3}
                  alt=""
                  className="object-cover w-1/2 pr-1"
                  // onMouseOver={() => setMainImage(gaming3)}
                  // onMouseOut={() => setMainImage(gaming)}
                />
                <img
                  src={gaming4}
                  alt=""
                  className="object-cover w-1/2 pl-1"
                  // onMouseOver={() => setMainImage(gaming4)}
                  // onMouseOut={() => setMainImage(gaming)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2">
            <div>
              {/* Todo: Add price using API  */}
              <p className="text-lg font-bold">PRICE</p>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 rounded-md py-1 px-3 mr-2">
                <p className="text-sm font-bold">Discount</p>
              </div>
              <TbApps className="text-4xl mb-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
