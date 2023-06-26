import SingleProject from "../Components/SingleProject";
import "../Styling/ProjectsPage.css"
import "../Styling/Projects.css"

interface Project {
    image: string;
    name: string;
    tech: string;
    desc: string;
  }
  
  interface ProjectsPageProps {
    currentProjects: Project[];
  }

const ProjectsPage = ({currentProjects}:ProjectsPageProps ) => {
    return (
        <div className="projects-page">
        <h1 className="projects-page-title">Projects</h1>
        <section className="projects-page-cards">
        {currentProjects.map((project)=> {
            return(
                 <SingleProject key={project.name} project={project}/>)
        })}
        </section>
        </div>
    )
}

export default ProjectsPage
