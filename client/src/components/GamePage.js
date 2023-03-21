import React, { useState } from "react";

// Game data
const games = [
    {
      id: 1,
      title: "Settlers of Catan",
      releaseDate: "1995-10-25",
      price: 49.99,
      image: "https://via.placeholder.com/200x200?text=Settlers+of+Catan",
    },
    {
      id: 2,
      title: "Ticket to Ride",
      releaseDate: "2004-11-15",
      price: 44.99,
      image: "https://via.placeholder.com/200x200?text=Ticket+to+Ride",
    },
    {
      id: 3,
      title: "Pandemic",
      releaseDate: "2007-04-01",
      price: 39.99,
      image: "https://via.placeholder.com/200x200?text=Pandemic",
    },
    {
      id: 4,
      title: "Codenames",
      releaseDate: "2015-09-01",
      price: 19.99,
      image: "https://via.placeholder.com/200x200?text=Codenames",
    },
    {
      id: 5,
      title: "Scythe",
      releaseDate: "2016-08-01",
      price: 79.99,
      image: "https://via.placeholder.com/200x200?text=Scythe",
    },
    {
      id: 6,
      title: "Azul",
      releaseDate: "2017-08-01",
      price: 39.99,
      image: "https://via.placeholder.com/200x200?text=Azul",
    },
  ];
  

// Game card component
const GameCard = ({ game }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md mx-2 my-4 max-w-sm">
      <img src={game.image} alt={game.title} className="w-full h-56 object-cover" />
      <div className="px-4 py-2">
        <h3 className="text-lg font-bold mb-2">{game.title}</h3>
        <p className="text-gray-600 mb-2">{game.releaseDate}</p>
        <p className="text-lg font-bold">${game.price}</p>
      </div>
    </div>
  );
};

// Game list component
const GameList = () => {
  // State for sorting
  const [sortType, setSortType] = useState("");

  // Function for sorting the game list
  const sortGames = (a, b) => {
    switch (sortType) {
      case "title":
        return a.title.localeCompare(b.title);
      case "price":
        return a.price - b.price;
      case "releaseDate":
        return new Date(a.releaseDate) - new Date(b.releaseDate);
      default:
        return 0;
    }
  };

  // Render the game list
  
  return (
    <div>
      <div className="flex justify-center items-center pt-4 pb-2">
        <div className="relative inline-flex">
          <div className="bg-gray-800 text-white py-1 px-3 rounded-l-md">
            Sort By
          </div>
          <button
            className="bg-gray-800 text-white py-1 px-3 hover:bg-gray-700"
            onClick={() => setSortType("title")}
          >
            Title
          </button>
          <button
            className="bg-gray-800 text-white py-1 px-3 hover:bg-gray-700"
            onClick={() => setSortType("price")}
          >
            Price
          </button>
          <button
            className="bg-gray-800 text-white py-1 px-3 hover:bg-gray-700 rounded-r-md"
            onClick={() => setSortType("releaseDate")}
          >
            Release Date
          </button>
        </div>
      </div>
      <hr className="border-gray-800" />
      <div className="flex flex-wrap justify-center">
        {games.sort(sortGames).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
  
      
  
    };

export default GameList;