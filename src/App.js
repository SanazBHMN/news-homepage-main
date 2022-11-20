import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App px-3 py-8">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <News />
    </div>
  );
}

export default App;
