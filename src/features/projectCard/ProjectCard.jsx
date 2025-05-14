import { NavLink } from "react-router-dom"
import "./projectCard.scss"

export const ProjectCard = ({ img, title, description,data, link }) => {
    return (
        <div className="projectCard">
            <div className="projectCard_img">
                <img src={img} alt={title} />
            </div>
            <div className="projectCard_body">
                <h3 className="projectCard_body_data">{data}</h3>
                <h3 className="projectCard_body_title">{title}</h3>
                <p className="projectCard_body_description">{description}</p>

                <div className="projectCard_body_btn">
                    <NavLink to="project-detail/:id" className="projectCard_body_button">
                        Толук маалымат
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
