import "./homeProject.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../../../app/store/reducers/project/projectThunks";
import { ProjectCard } from "../../../features";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HomeProject = () => {
  const dispatch = useDispatch();
  const { project,  } = useSelector((state) => state.project);
    const title_project = useSelector(state => state.homePage.home?.title_project);

  useEffect(() => {
    dispatch(getProject());
  }, [dispatch]);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="homeProject">
      <div className="container">
        <h1 className="homeProject_title">{title_project}</h1>
        {Array.isArray(project) && project.length > 0 && (
          <Slider {...sliderSettings} className="homeProject_slider">
            {project.map((proj) => (
              <ProjectCard
                key={proj.id}
                img={Array.isArray(proj.img) ? proj.img[0] : proj.img}
                title={proj.title}
                description={proj.description}
                link={proj.link}
                id={proj.id}
              />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};
