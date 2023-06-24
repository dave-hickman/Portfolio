import { useState } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { useSpring, animated } from "react-spring";
import Blur from "./Components/Blur";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  const cursorAnimation = useSpring({
    top: `${position.y}px`,
    left: `${position.x}px`,
    tension: 2, // Adjust the tension value to control the stiffness of the spring
    friction: 1000000, // Adjust the friction value to control the damping of the spring
    duration: 500, // Total duration of the animation
  });

  return (
    <div onPointerMove={handlePointerMove}>
      <Navbar />
      <Routes>
      <Route path={`/`} element={<Homepage />}></Route>
      <Route path={`/about`} element={<About />}></Route>
      <Route path={`/contact`} element={<Contact />}></Route>
      </Routes>
      <animated.div className="cursor" style={cursorAnimation}></animated.div>
      <Blur />
    </div>
  );
}

export default App;
