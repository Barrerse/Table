import React from "react";
import gaming from "../assets/holder.png";
import Card from "./Card";
import one from "../assets/holder1.png";
import two from "../assets/holder.png";
const SpecialOffer = () => {
  const cards = [
    { wallpaper: one, title: "Board Game" },
    { wallpaper: one, title: "Board Game" },
    { wallpaper: one, title: "Board Game" },
    { wallpaper: one, title: "Board Game" },
    { wallpaper: one, title: "Board Game" },
    { wallpaper: one, title: "Board Game" },
    { wallpaper: one, title: "Board Game" },
    { wallpaper: one, title: "Board Game" },
  ];
  return (
    <div className="mx-[2rem]  ">
      <p className="text-white pt-6">Games on Discount</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-3">
      {cards.map((card) => (
          <Card wallpaper={card.wallpaper} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;