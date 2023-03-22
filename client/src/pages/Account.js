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
  const [redirect,setRedirect] = useState(null);
  const {ready,user,setUser} = useContext(UserContext);

let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'account';
  }

  async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>
      <AccountNav />
      {subpage === 'account' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>
      )}
      {subpage === 'games' && (
        <GamesPage />
      )}
    </div>
  );
}
  