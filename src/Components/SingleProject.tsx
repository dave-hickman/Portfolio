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
            <p>{project.tech}</p>
            <p>{project.desc}</p>
        </article>
    )
}

export default SingleProject