import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/games/${id}`).then((response) => {
      setGame(response.data);
    });
  }, [id]);

  if (!game) return "";

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">{game.title}</h1>
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {game.description}
          </div>
        </div>
      </div>
    </div>
  );
}
