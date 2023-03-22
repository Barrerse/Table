import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Account() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect,setRedirect] = useState(null);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "account";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect('/');
    setUser(null);
  }

  if (!ready) return "Loading...";

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  function linkClasses(type = null) {
    let classes = "p-2 px-6 text-white";
    if (type === subpage) {
      classes = "p-2 px-6 text-blue bg-gray-300 rounded-full";
    }
    return classes;
  }

if(redirect) {
    return <Navigate to={redirect} />;
}

  return (
    <div>
      <Navbar />
      <nav className="w-full flex justify-center mt-8 gap-4 mb-8">
        <Link className={linkClasses("account")} to={"/account"}>
          My Profile
        </Link>
        <Link className={linkClasses("games")} to={"/account/games"}>
          My Games
        </Link>
        <Link className={linkClasses("comments")} to={"/account/comments"}>
          My Comments
        </Link>
      </nav>
      {subpage === "account" && (
        <div className="text-center max-w-lg mx-auto">
          <div className="text-white">
            Logged in as {user.name} ({user.email})<br />
          </div>
          <div>
            <button onClick={logout} className="max-w-2xl mt-2 bg-red-300 p-2 text-blue rounded-2xl">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
