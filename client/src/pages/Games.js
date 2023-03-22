import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchGamesAPI100 } from '../utils/API';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await searchGamesAPI100();
        const { games } = await response.json();
        setGames(games);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
        <Navbar />
      <h1 className="text-5xl font-bold mb-6 text-white text-center mt-5">Top 100 Games Sold</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-[#1b2838] text-white p-4 rounded-md shadow-md"
          >
            <Link to={`/game/${game.id}`}>
              <img
                src={game.images.medium}
                alt={game.name}
                className="w-full h-40 object-cover object-center mb-4 rounded-md"
              />
              <h2 className="text-xl font-bold mb-2">{game.name}</h2>
            </Link>
            <p className="text-sm">
              Min Players: {game.min_players} | Max Players: {game.max_players}
            </p>
            <p className="text-sm">
              Playtime: {game.min_playtime} - {game.max_playtime} minutes
            </p>
            <p className="text-sm">
            Rating: {game.average_user_rating.toFixed(2)} / 5
             </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Games;
