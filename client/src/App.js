import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./pages/Home.js";
import Store from "./pages/Store.js";
import Explore from "./pages/Explore.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Account from "./pages/Account.js";
import Register from "./components/Register.js";
import axios from "axios";
import { UserContextProvider } from "./utils/UserContext";
import { useEffect } from "react";
import Games from './pages/Games.js';
import Discussion from "./pages/Discussion.js";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;



function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="bg-[#1b2838] min-h-screen">
          <Routes>
            <Route path="/store" element={<Store />} />
            <Route path="*" element={<Home />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Account/:subpage?" element={<Account />} />
            <Route path="/Account/:subpage/:action" element={<Account />} />
            <Route path="/Games" element={<Games />} />
            <Route path="/Discussion" element={<Discussion />} />
          </Routes>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
