import Navbar from "../components/Navbar";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { Navigate, Link } from "react-router-dom";

export default function Account() {
  const { ready, user } = useContext(UserContext);

  if (!ready) return "Loading...";

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <Navbar />
      <nav className="w-full flex justify-center mt-8 gap-4">
        <Link className="p-2 px-6 bg-gray-300 rounded-full" to={"/account"}>
          My Profile
        </Link>
        <Link className="p-2 px-6 text-white" to={"/account/games"}>
          My Games
        </Link>
        <Link className="p-2 px-6 text-white" to={"/account/comments"}>
          My Comments
        </Link>
      </nav>
    </div>
  );
}
