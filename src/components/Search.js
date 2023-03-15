import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div className="gradient mx-[2.5rem] pl-4 pr-2 py-[0.1rem] mt-8 flex items-center justify-between" style={{ backgroundColor: '#316282' }}>   
        <ul className="flex itmes-cente py-1.5 text-[14px] text-[white] gap-10 ">
            <li><p>Games</p></li>
            <li><p>Kickstarters</p></li>
            <li><p>Discussion</p></li>
            <li><p>Deals</p></li>
            <li><p>News</p></li>
            <li><p>Coming Soon</p></li>
        </ul>
        <div className="relative" style={{ backgroundColor: '#5298c2' }}>
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
