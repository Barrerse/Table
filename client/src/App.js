import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.js';
import Home from './pages/Home.js';
import Store from './pages/Store.js';
import Explore from './pages/Explore.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Games from './pages/Games.js';
import SignInScreen from './components/SigninScreen'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#1b2838] flex flex-col min-h-screen">
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<Home />} />	
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Login" element={<Login />} /> 
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignIn" element={<SignInScreen />} />
          <Route path="/Games" element={<Games />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
