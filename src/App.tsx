import { useState } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { useSpring, animated } from "react-spring";
import Blur from "./Components/Blur";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProjectsPage from "./Pages/ProjectsPage";
import GYSI from "./assets/Get Your Steps In.png";
import EV from "./assets/Screenshot 2023-07-11 at 11.06.15.png"
import AIVA from "./assets/AI Voice Assistant.png"
import davesNews from "./assets/Dave's News.png";

interface Project {
  image: string;
  name: string;
  tech: string;
  desc: string;
  link: string;
  fe: string;
  be: string | null;
}


function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  const currentProjects: Project[] = [
    {
      image: GYSI,
      name: "Get Your Steps In",
      tech: "React, React-Three-Fiber, Mongo.db, CSS",
      desc: "Full-stack immersive 3D platform game employing physics and 3D graphics with only javascript in the browser via React-Three-Fiber, a React wrapper for the Three.js library. All time and weekly high scores are submitted and saved into a mongo.db database.",
      link: "https://getyourstepsin.netlify.app/",
      fe: "https://github.com/saimakhanom/frontend-get-your-steps-in",
      be: "https://github.com/saimakhanom/backend-get-your-steps-in"

    },
    {
      image: davesNews,
      name: "Dave's News",
      tech: "React, Axios, PostgreSQL, CSS",
      desc: "Full-stack news application using React on the front end making API calls to a PostgreSQL back end database. Comments can be added and deleted from individual articles, and articles can be sorted by date, comment count and votes in ascending or descending order.",
      link: "https://daves-news.vercel.app/",
      fe: "https://github.com/dave-hickman/news-frontend",
      be: "https://github.com/dave-hickman/news_project"
    },
    {
      image: EV,
      name: "EV Charging Point Finder",
      tech: "React, Typescript, Next.js, Tailwind",
      desc: "Frontend application which takes your current location, or any location of your choice, and displays a map of all the EV charging points in the area. Clicking on any charging point provides info about the charging point and displays the quickest route from your chosen location.",
      link: "https://ev-charging-point-finder.vercel.app/",
      fe: "https://github.com/dave-hickman/EV-Charging-Point-Finder",
      be: null
    },
    {
      image: AIVA,
      name: "AI Voice Assistant",
      tech: "React, Javascript, Tailwind",
      desc: "Full-stack application which allows you to use your voice to ask questions to an AI Voice Assistant which responds by talking back to you with an answer pulled from OpenAI's API.",
      link: "https://ai-voice-assistant-kappa.vercel.app/",
      fe: "https://github.com/dave-hickman/AI-Voice-Assistant",
      be: "https://github.com/dave-hickman/ai-voice-assistant-backend"
    },
  ];

  const cursorAnimation = useSpring({
    top: `${position.y}px`,
    left: `${position.x}px`,
    tension: 2,
    friction: 1000000, 
    duration: 500,
  });

  return (
    <div onPointerMove={handlePointerMove}>
      <Navbar />
      <Routes>
      <Route path={`/`} element={<Homepage currentProjects={currentProjects}/>}></Route>
      <Route path={`/about`} element={<About />}></Route>
      <Route path={`/contact`} element={<Contact />}></Route>
      <Route path={`/projects`} element={<ProjectsPage currentProjects={currentProjects} />}></Route>

      </Routes>
      <animated.div className="cursor" style={cursorAnimation}></animated.div>
      <Blur />
    </div>
  );
}

export default App;
