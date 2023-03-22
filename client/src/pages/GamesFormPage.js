import {useEffect, useState} from "react";
import axios from "axios";
import AccountNav from "./AccountNav";
import {Navigate, useParams} from "react-router-dom";

export default function GamesFormPage() {
    const {id} = useParams();
  const [gameid, setGameid] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [minplayers, setMinplayers] = useState("");
  const [maxplayers, setMaxplayers] = useState("");
  const [redirect,setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/games/'+id).then(response => {
       const {data} = response;
       setGameid(data.gameid);
       setName(data.name);
       setImage(data.image);
       setDescription(data.description);
       setRating(data.rating);
       setMinplayers(data.minplayers);
       setMaxplayers(data.maxplayers);
    });
  }, [id]);
  async function saveGame(ev) {
    ev.preventDefault();
    const gameData = {
      gameid,
      name,
      image,
      description,
      rating,
      minplayers,
      maxplayers,
    };
    if (id) {
      // update
      await axios.put('/games', {
        id, ...gameData
      });
      setRedirect(true);
    } else {
      // new place
      await axios.post('/games', gameData);
      setRedirect(true);
    }

  }

  if (redirect) {
    return <Navigate to={'/account/games'} />
  }

  return (
    <div>
        <AccountNav />
        <div className="text-center">
          <form className="max-w-lg mx-auto" onSubmit={saveGame}>
            <input
              className="w-full border my-2 py-2 px-3 rounded-2xl"
              type="text"
              placeholder="gameid"
              value={gameid}
              onChange={(ev) => setGameid(ev.target.value)}
            />
            <input
              className="w-full border my-2 py-2 px-3 rounded-2xl"
              type="text"
              placeholder="name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <input
              className="w-full border my-2 py-2 px-3 rounded-2xl"
              type="text"
              placeholder="image"
              value={image}
              onChange={(ev) => setImage(ev.target.value)}
            />
            <input
              className="w-full border my-2 py-2 px-3 rounded-2xl"
              type="text"
              placeholder="description"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <input
              className="w-full border my-2 py-2 px-3 rounded-2xl"
              type="text"
              placeholder="rating"
              value={rating}
              onChange={(ev) => setRating(ev.target.value)}
            />
            <input
              className="w-full border my-2 py-2 px-3 rounded-2xl"
              type="text"
              placeholder="minplayers"
              value={minplayers}
              onChange={(ev) => setMinplayers(ev.target.value)}
            />
            <input
              className="w-full border my-2 py-2 px-3 rounded-2xl"
              type="text"
              placeholder="maxplayers"
              value={maxplayers}
              onChange={(ev) => setMaxplayers(ev.target.value)}
            />
            <div>
              <button className="w-full bg-gray-300 my-2 p-2 text-blue rounded-2xl">
                Save
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}

