import Navbar from "../components/Navbar";
import AddGames from "./AddGames";
import AccountNav from "./AccountNav";
import GamesPage from "./GamesPage";
import SavedGames from "./AddGames";
import AddComments from "./AddComments";
import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Account() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "account";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <AccountNav />
      {subpage === "account" && (
        <div className="text-center my-2 max-w-lg mx-auto">
          <div className="text-white">
            Logged in as {user.name} ({user.email})<br />
            </div>
          <button
            onClick={logout}
            className="my-2 inline-flex p-2 gap-2 px-6 text-blue bg-red-300 rounded-full"
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            Logout
          </button>
        </div>
      )}
      {subpage === "games" && <GamesPage />}
    </div>
  );
}
