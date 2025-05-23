import { NavLink } from "react-router-dom"
import "./newsAds.scss"

export const NewsAds = ({ img, data, title, description, id }) => {
    return (
        <div className="newsAds">
            <NavLink to={`/ads-detail/${id}`}>
                <img src={img} alt={title} className="newsAds_img" />
            </NavLink>
            <div className="newsAds_content">
                <h4 className="newsAds_content_data">{data}</h4>
                <h2 className="newsAds_content_title">{title}</h2>
                <p className="newsAds_content_description">{description}</p>
            </div>
        </div>
    )
}
