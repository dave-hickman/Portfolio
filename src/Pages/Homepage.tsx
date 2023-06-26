import Projects from "../Components/Projects";
import Scroller from "../Components/Scroller";
import "../Styling/Homepage.css"

interface Project {
  image: string;
  name: string;
  tech: string;
  desc: string;
}

interface HomepageProps {
  currentProjects: Project[];
}

const Homepage = ({currentProjects}: HomepageProps) => {
  return (
    <div className="homepage-container">
      <div className="title-container">
      <h1>Dave Hickman</h1>
      <h2>Software Developer</h2>
      </div>
      <Scroller/>
      <Projects currentProjects={currentProjects}/>
    </div>
  );
};

export default Homepage;
