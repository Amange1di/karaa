import "./homeBanner.scss"
import hero from "../../../shared/images/hero.jpg"
import { NavLink } from "react-router-dom"
export const HomeBanner = () => {
    return (
        <div className="homeBanner">
            <div className="container">

                <div className="homeBanner_content">
                    <h1 className="homeBanner_title">Кара-Кочкор айыл аймагы
                        Айылдын өнүгүүсү жана эл жыргалчылыгы — башкы максат.
                    </h1>

                    <NavLink to={"/about"} className="homeBanner_button"><button>Көбүрөөк билүү</button></NavLink>
                </div>
                <div className="homeBanner_image">
                    <img src={hero} alt="Karaa" />
                </div>
            </div>

        </div>
    )
}
