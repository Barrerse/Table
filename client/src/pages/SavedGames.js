import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function SavedGames(){
    const [games,setGames] = useState([]);
    useEffect(() => {
        axios.get('/user-games').then(({data}) => {
          setGames(data);
        });
      }, []);
      return (
        <div>
          <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/games/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
            Add new game
          </Link>
          <div>
          {games.length > 0 && games.map(game => (
            <Link to={'/account/games/'+game._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
              <div className="grow-0 shrink">
                <h2 className="text-xl">{game.name}</h2>
                <p className="text-sm mt-2">{game.description}</p>
              </div>
            </Link>
          ))}
            </div>
        </div>
      );
}