import "./homeProject.scss"
import logo from "../../../shared/images/hero.jpg"
import { ProjectCard } from "../../../features"
import Slider from "react-slick" 
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

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
    id: 3,
    img: logo,
    title: "Project Title 3",
    description: "Yet another project description.",
    link: "https://www.youtube.com/watch?v=lWCgMI-bAk8"
  }
]

export const HomeProject = () => {
  const sliderSettings = {
    dots: false, 
    arrows: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 10000, 
  }

  return (
    <div className="homeProject">
      <div className="container">
        <h1 className="homeProject_title">Проекты</h1>
        <Slider {...sliderSettings} className="homeProject_slider">
          {faceProject.map(project => (
            <ProjectCard
              key={project.id}
              img={project.img}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}
