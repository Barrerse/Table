import Navbar from "../components/Navbar";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { Navigate } from "react-router-dom";

export default function Account() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <Navbar />
      <div>account pages for {user.name}</div>
    </div>
  );
}
