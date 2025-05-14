import { NavLink } from "react-router-dom"
import "./newsBlock.scss"
export const NewsBlock = ({ img, data, title, description }) => {
    return (
        <div className="newsBlock">
            <img src={img} alt={title} className="newsBlock_img" />
            <div className="newsBlock_contend">
                <h4 className="newsBlock_contend_data">{data}</h4>
                <h2 className="newsBlock_contend_title">{title}</h2>
                <p className="newsBlock_contend_description">{description}</p>
                <NavLink  to="/news-detail/:id" className="newsBlock_btn"><button>Толук окуу</button></NavLink>
            </div>
        </div>
    )
}
