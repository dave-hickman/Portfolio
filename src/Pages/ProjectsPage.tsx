import SingleProject from "../Components/SingleProject";

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
        <>
        <h1>Projects</h1>
        {currentProjects.map((project)=> {
            return(
                 <SingleProject key={project.name} project={project}/>)
        })}
        </>
    )
}

export default ProjectsPage
