import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Topics from "./components/Topics";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto sm:w-4/5 px-3 py-8">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="my-3 sm:my-8 xl:grid grid-cols-70 gap-6">
        <Hero />
        <News />
      </div>
      <Topics />
      <div className="attribution text-center">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="underline"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/SanazBHMN"
          className="underline"
        >
          Sanaz Bahmani
        </a>
        .
      </div>
    </div>
  );
}

export default App;
