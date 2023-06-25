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
      desc: "placeholderrrrr",
    },
    {
      image: davesNews,
      name: "Dave's News",
      tech: "React, PostgreSQL, CSS",
      desc: "placeholderrrrr",
    },
    {
      image: gasLeak,
      name: "Gas Leak",
      tech: "React, React-Three-Fiber, Mongo.db, CSS",
      desc: "placeholderrrrr",
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
