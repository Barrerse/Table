import React from 'react'

const Search = () => {
  return (
    <div className="gradient mx-[2.5rem] pl-4 pr-2 py-[0.1rem] mt-8 flex items-center justify-between">   
        <ul className="flex itmes-cente py-1.5 text-[14px] text-[white] gap-10 ">
            <li>
                <p>Games</p>
            </li>
            <li>
                <p>Kickstarters</p>
            </li>
            <li>
                <p>Discussion</p>
            </li>
            <li>
                <p>Deals</p>
            </li>
            <li>
                <p>News</p>
            </li>
            <li>
                <p>Coming Soon</p>
            </li>
        </ul>
        <input type="search"
        placeholder="Search"
        className="pl-4 rounded placeholder:text-black" />
    </div>
  )
}

export default Search