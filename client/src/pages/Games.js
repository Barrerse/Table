import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { searchGamesAPI100 } from '../utils/API';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserContext } from "../utils/UserContext";

const Games = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const { ready, user, setUser } = useContext(UserContext);

    useEffect(() => {
        const fetchGames = async () => {
          try {
            const response = await searchGamesAPI100();
            const { games } = await response.json();
            setGames(games);
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
        };
      
        fetchGames();
      }, []);
      

  return (
    <div>
    <Navbar />
    <h1 className="text-5xl font-bold mb-6 text-white text-center mt-5">
      Top 100 Games Sold
    </h1>
    {loading ? (
      <div className="flex justify-center items-center mt-10">
        <div className="spinner"></div>
      </div>
    ) : (
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
             <p>
             {!!user && (
              <div>
                <button className="max-w-2xl mt-2 bg-green-300 p-2 text-blue rounded-2xl">Add to my Games</button>
              </div>
              
            )}
              </p>
          </div>
        ))}
        </div>
    )}
    <Footer />
  </div>
  );
};

export default Games;
