import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { searchGamesAPIVid } from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../utils/UserContext";
import YouTube from "react-youtube";

const Explore = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ready, user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await searchGamesAPIVid();
        const { videos } = await response.json();
        setVideos(videos);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 0,
      enablejsapi: 1,
      origin: window.location.origin,
    },
  };

  const extractVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i;
    const match = url.match(regex);
    return match && match[1];
  };
  const handleOnReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-5xl font-bold mb-6 text-white text-center mt-5">
        Top 20 Videos
      </h1>
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((game) => (
            <div
              key={game.id}
              className="bg-[#1b2838] text-white p-4 rounded-md shadow-md"
            >
              <Link to={`${game.url}`}>
                <div className="videoWrapper">
                  <YouTube
                    videoId={extractVideoId(game.url)}
                    opts={opts}
                    onReady={handleOnReady}
                  />
                </div>
                <h2 className="text-xl font-bold mb-2">{game.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Explore;
