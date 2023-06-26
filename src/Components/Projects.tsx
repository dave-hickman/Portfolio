import "../Styling/Projects.css";
import GYSI from "../assets/Get Your Steps In.png";
import davesNews from "../assets/Dave's News.png";
import gasLeak from "../assets/Gas Leak.png"
import SingleProject from "./SingleProject";

interface Project {
    image: string;
    name: string;
    tech: string;
    desc: string;
}

const Projects = () => {
  const currentProjects: Project[] = [
    {
      image: GYSI,
      name: "Get Your Steps In",
      tech: "React, React-Three-Fiber, Mongo.db, CSS",
      desc: "Full-stack immersive 3D platform game employing physics and 3D graphics with only javascript in the browser via React-Three-Fiber, a React wrapper for the Three.js library. All time and weekly high scores are submitted and saved into a mongo.db database.",
    },
    {
      image: davesNews,
      name: "Dave's News",
      tech: "React, Axios, PostgreSQL, CSS",
      desc: "Full-stack news application using React on the front end making API calls to a PostgreSQL back end database. Comments can be added and deleted from individual articles, and articles can be sorted by date, comment count and votes in ascending or descending order.",
    },
    {
      image: gasLeak,
      name: "Gas Leak",
      tech: "React, Axios, Chart.js, CSS ",
      desc: "Front end application which allows you to calculate the real-time cost of a transaction on the Ethereum network (gas fee), by choosing your desired speed and the type of transaction you would like to make. This app simplifies what can be a confusing process and provides a graph to indicate the most cost-effective time to make a transaction.",
    },
  ];
  return (
    <section className="projects-container">
        {currentProjects.map((project)=> {
            return(
                 <SingleProject key={project.name} project={project}/>)
        })}
 
    </section>
  );
};

export default Projects;
