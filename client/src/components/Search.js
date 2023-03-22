import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { searchGamesAPI } from '../utils/APIQ';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchedGames, setSearchedGames] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await searchGamesAPI(searchInput);
      const { games } = await response.json();
      setSearchedGames(games);
      setSearchInput('');
      setShowResults(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="gradient mx-[2.5rem] pl-4 pr-2 py-[0.1rem] mt-8 sm:flex sm:items-center sm:justify-between" style={{ backgroundColor: '#316282' }}>
        <ul className="flex flex-col sm:flex-row sm:items-center sm:py-1.5 sm:text-[14px] sm:gap-10 text-white">
          <li className="my-1 sm:my-0 hover:text-blue-500">
            <p>Games</p>
          </li>
          <li className="my-1 sm:my-0 hover:text-blue-500">
            <a href="https://www.boardgameatlas.com/kickstarter" target="_blank" rel="noopener noreferrer">
              <p>Kickstarters</p>
            </a>
          </li>
          <li className="my-1 sm:my-0 hover:text-blue-500">
            <Link to="/explore">
              <p>Discussion</p>
            </Link>
          </li>
          <li className="my-1 sm:my-0 hover:text-blue-500">
            <Link to="/explore">
              <p>Deals</p>
            </Link>
          </li>
        </ul>
        <div className="relative sm:ml-4" style={{ backgroundColor: '#5298c2' }}>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search for games..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <FiSearch className="absolute top-0 right-0 mt-1 mr-4 text-black" />
          </form>
        </div>
      </div>
      {showResults && searchedGames.length > 0 && (
        <div className="search-results-container w-full bg-white mt-4 py-4 px-4 rounded-md shadow-md">
          <h2 className="mb-4">Search Results</h2>
          <div className="card-columns">
            {searchedGames.map((game) => (
              <div className="card" key={game.id}>
                <img src={game.images.medium} className="card-img-top" alt={game.name} />
                <div className="card-body">
                  <h5 className="card-title">{game.name}</h5>
                  <p className="card-text">{game.description_preview}</p>
                  <Link to={`/game/${game.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;