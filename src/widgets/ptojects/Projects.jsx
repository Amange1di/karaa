import "./projects.scss"
import { ProjectCard } from "../../features"
import { useEffect, } from "react"
import { getProject } from "../../app/store/reducers/project/projectThunks";
import { getTitle } from "../../app/store/reducers/title/titleThunks";

import { useDispatch, useSelector } from "react-redux";
export const Projects = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project?.project) || [];
  const title = useSelector(state => state.title.data || {});

  useEffect(() => {
    dispatch(getProject());
    dispatch(getTitle());

  }, [dispatch]);


  return (
    <div className="project">
      <div className="container">
        <h1 className="newsContend_title">{title?.title_project}</h1>
        <div className="project_slider">
          {project.map(project => (
            <ProjectCard
              key={project.id}
              img={Array.isArray(project.img) ? project.img[0] : project.img}
              title={project.title}
              description={project.description}
              id={project.id}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
