import Navbar from './components/Navbar';
import Search from './components/Search.js';
import Recommended from './components/Recommended.js';

function App() {
  return (
    <div className="bg-[#1b2838] h-screen">
      {/* nav bar */}
      <Navbar />
      {/* categories */}
      <Search />
      {/* recomended */}
      <Recommended />
      {/* offers */}
      {/* browse */}  
      {/* footer */}
    <div className=""></div>
    </div>
  );
}

export default App;
