import "../Styling/SingleProject.css"

interface SingleProjectProps {
    image: string;
    name: string;
    tech: string;
    desc: string;
}

const SingleProject: React.FC<{project:SingleProjectProps}> = ({project}) => {
    return(
        <article className="indiv-project-container">
            <img className="project-image" src={project.image} alt={project.name}/>
            <h3 className="project-title">{project.name}</h3>
            <p className="project-tech">{project.tech}</p>
            <p className="project-desc">{project.desc}</p>
        </article>
    )
}

export default SingleProject