import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.js';
import Home from './pages/Home.js';
import Store from './pages/Store.js';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#1b2838] h-screen">
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<Home />} />	
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
