import "./App.css";
import { Navbar } from "./Components/Navbar";
import Home from "./Pages/Home";
function App() {
  const data = ["Home", "About Us", "Services", "Portfolio", "Contact Us"];

  return (
    <div className="App">
      <Navbar data={data} />
      <Home />
    </div>
  );
}

export default App;






