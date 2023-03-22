import { Link, Navigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import Search from "../components/Search";
import Games from "../pages/Games";

export default function AddGames() {
  const { action } = useParams();
  const [gameid, setGameid] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [minplayers, setMinplayers] = useState("");
  const [maxplayers, setMaxplayers] = useState("");

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex p-2 px-6 text-blue bg-gray-300 rounded-full"
            to={"/account/games/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add New Game
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <input type="text" placeholder="gameid" value={gameid} onChange={ev => setName(ev.target.value)}/>
            <input type="text" placeholder="name" value={name} onChange={ev => setName(ev.target.value)}/>
            <input type="text" placeholder="image" value={image} onChange={ev => setImage(ev.target.value)}/>
            <input type="text" placeholder="description" value={description} onChange={ev => setDescription(ev.target.value)}/>
            <input type="text" placeholder="rating" value={rating} onChange={ev => setRating(ev.target.value)}/>
            <input type="text" placeholder="minplayers" value={minplayers} onChange={ev => setMinplayers(ev.target.value)}/>
            <input type="text" placeholder="maxplayers" value={maxplayers} onChange={ev => setMaxplayers(ev.target.value)}/>
          </form>
          <div>
        </div>
        </div>
      )}
    </div>
  );
}
