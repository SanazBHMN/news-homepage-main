import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
