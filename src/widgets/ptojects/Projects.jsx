
import "./projects.scss"
import logo from "../../shared/images/hero.jpg"
import { ProjectCard } from "../../features"

const faceProject = [
  {
    id: 1,
    img: logo,
    title: "Project Title 1",
    description: "This is a description of the project. This is a description of the project. This is a description of the project. This is a description of the projectThis is a description of the project. This is a description of the project. This is a description of the project. This is a description of the projectThis is a description of the project. This is a description of the project. This is a description of the project. This is a description of the project.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  },
  {
    id: 2,
    img: logo,
    title: "Project Title 2",
    description: "Another project description.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  },
  {
    id: 2,
    img: logo,
    title: "Project Title 2",
    description: "Another project description.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  },
  {
    id: 2,
    img: logo,
    title: "Project Title 2",
    description: "Another project description.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  },
  {
    id: 2,
    img: logo,
    title: "Project Title 2",
    description: "Another project description.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  },
  {
    id: 2,
    img: logo,
    title: "Project Title 2",
    description: "Another project description.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  },
  {
    id: 2,
    img: logo,
    title: "Project Title 2",
    description: "Another project description.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  },
  {
    id: 2,
    img: logo,
    title: "Project Title 2",
    description: "Another project description.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  },
  {
    id: 2,
    img: logo,
    title: "Project Title 2",
    description: "Another project description.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  },
  {
    id: 2,
    img: logo,
    title: "Project Title 2",
    description: "Another project description.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  },
  {
    id: 3,
    img: logo,
    title: "Project Title 3",
    description: "Yet another project description.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  }
]

export const Projects = () => {


  return (
    <div className="project">
      <div className="container">
        <h1 className="project_title">Проекты</h1>
        <div className="project_slider">
          {faceProject.map(project => (
            <ProjectCard
              key={project.id}
              img={project.img}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
