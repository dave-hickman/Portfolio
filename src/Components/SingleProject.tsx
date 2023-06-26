import { VscGithub } from "react-icons/vsc";
import "../Styling/SingleProject.css";

interface SingleProjectProps {
  image: string;
  name: string;
  tech: string;
  desc: string;
  link: string;
  fe: string;
  be: string | null;
}

const SingleProject: React.FC<{ project: SingleProjectProps }> = ({
  project,
}) => {
  if (project.be) {
    return (
      <article className="indiv-project-container">
        <a href={project.link} target="_blank">
          <img
            className="project-image"
            src={project.image}
            alt={project.name}
          />
        </a>
        <a href={project.link} target="_blank">
          <h3 className="project-title">{project.name}</h3>
        </a>
        <div className="links-container">
          <div className="links">
            <p className="project-desc">Front End:</p>
            <a href={project.fe} target="_blank">
              <VscGithub />
            </a>
          </div>
          <div className="links">
            <p className="project-desc">Back End:</p>
            <a href={project.be} target="_blank">
              <VscGithub />
            </a>
          </div>
        </div>
        <p className="project-tech">{project.tech}</p>
        <p className="project-desc">{project.desc}</p>
      </article>
    );
  } else
    return (
      <article className="indiv-project-container">
        <a href={project.link} target="_blank">
          <img
            className="project-image"
            src={project.image}
            alt={project.name}
          />
        </a>
        <a href={project.link} target="_blank">
          <h3 className="project-title">{project.name}</h3>
        </a>
        <div className="links-container">
          <div className="links">
            <p className="project-desc">Front End:</p>
            <a href={project.fe} target="_blank">
              <VscGithub />
            </a>
          </div>
        </div>
        <p className="project-tech">{project.tech}</p>
        <p className="project-desc">{project.desc}</p>
      </article>
    );
};

export default SingleProject;
