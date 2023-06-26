import "../Styling/Projects.css";

import SingleProject from "./SingleProject";

interface Project {
    image: string;
    name: string;
    tech: string;
    desc: string;
    link: string;
    fe: string;
    be: string | null;
  }
  
  interface ProjectsProps {
    currentProjects: Project[];
  }

const Projects = ({currentProjects}: ProjectsProps) => {
  
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
