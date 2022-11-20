import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Topics from "./components/Topics";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App px-3 py-8">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <News />
      <Topics />
    </div>
  );
}

export default App;
