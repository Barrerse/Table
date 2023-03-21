import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
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
          <input
            type="search"
            placeholder="search"
            className="pl-4 pr-10 rounded placeholder:text-black"
          />
          <FiSearch className="absolute top-0 right-0 mt-1 mr-4 text-black" />
        </div>
    </div>
  )
}

export default Search
