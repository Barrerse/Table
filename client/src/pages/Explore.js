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

  //time function 

  const calculateRelativeTime = (dateString) => {
    const publishedDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate - publishedDate;
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
  
    if (years > 0) {
      return `${years} ${years === 1 ? "year" : "years"} ago`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
      return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    }
  };

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
      <h1 className="text-3xl font-bold mb-6 text-white text-center mt-5">
        Recent Board Game Videos!
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
              <div className="relative overflow-hidden rounded-lg group">
                  <YouTube
                    className="transition-transform duration-200 ease-in-out transform group-hover:scale-105"
                    videoId={extractVideoId(game.url)}
                    opts={opts}
                    onReady={handleOnReady}
                  />
                </div>

                <h2 className="text-xl font-bold mb-2">{game.title}</h2>
                <p className="text-md">{game.channel_name}</p>
                <p className="text-sm">{calculateRelativeTime(game.published_date)}</p>
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
