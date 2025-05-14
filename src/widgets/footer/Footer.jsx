import "./footer.scss"
import logo from "../../shared/images/gerb.svg"
import { NavLink } from "react-router-dom"
import { FaPhoneAlt, } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

import { BsInstagram } from "react-icons/bs";
const faceData = [
    {
        id: "1",
        name: "Башкы бет",
        path: "/",
    },
    {
        id: "2",
        name: "Айыл жөнүндө",
        path: "/about",
    },
    {
        id: "3",
        name: "Жаңылыктар",
        path: "/news",
    },
    {
        id: "4",
        name: "Администрация",
        path: "/administration",
    },
    {
        id: "5",
        name: "Долбоорлор",
        path: "/projects",
    },
    {
        id: "6",
        name: "Галерея",
        path: "/gallery",

    },
    {
        id: "6",
        name: "Медиа биз жөнүндө",
        path: "/gallery",

    }
]

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_top">
                    <div className="footer_top_logo">
                        <img src={logo} alt="" />
                        <h1>Кара-Кочкор
                            айыл өкмөтү</h1>
                    </div>
                    <div className="footer_top_nav">
                        <h3>Навигация</h3>
                        {faceData.map((item) => (
                            <NavLink
                                className="footer_top_nav_item"
                                to={item.path}
                                activeClassName="active"
                                key={item.id}
                            >
                                {item.name}
                            </NavLink>
                        ))}

                    </div>
                    <div className="footer_top_group">
                        <h3>Байланыш</h3>
                        <div className="footer_top_group_block">
                            <FaPhoneAlt className="footer_top_group_block_icon" /> <p>+996 555 555 555</p>

                        </div>
                        <div className="footer_top_group_block">
                            <IoLocationSharp className="footer_top_group_block_icon" /> <p>Локация</p>
                        </div>
                        <div className="footer_top_group_block">
                            <MdOutlineMailOutline className="footer_top_group_block_icon" /> 
                            <p>  info@karakochkor.kg
                            </p>
                        </div>
                    </div>
                    <div className="footer_top_group">
                        <h3>Социалдык тармактар</h3>
                        <div className="footer_top_socials">
                            <BsInstagram />
                            <BsInstagram />
                            <BsInstagram />
                        </div>
                    </div>
                </div>


                <div className="footer_bottom">
                    <p>© 2025 Кара-Кочкор айыл өкмөтү. Бардык укуктар корголгон.</p>
                    <p>Сайтты иштеп чыккан: <a href="https://www.instagram.com/amangeldi._l/"> Amangeldi</a></p>
                </div>
            </div>


        </div>
    )
}
