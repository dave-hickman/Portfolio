import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Scroller from "../Components/Scroller";
import "../Styling/Homepage.css"

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="title-container">
      <h1>Dave Hickman</h1>
      <h2>Software Developer</h2>
      </div>
      <Scroller/>
      <Projects/>
    </div>
  );
};

export default Homepage;
