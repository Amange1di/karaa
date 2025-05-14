import "./header.scss";
import { FaPhoneAlt, FaEye } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../shared/images/gerb.svg"
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
    path: "/project",
  },
  {
    id: "6",
    name: "Галерея",
    path: "/gallery",

  }
]

export const Header = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header_top">

            <div className="header_top_logo">
              <img src={logo} alt="" />
              <h1>Кара-Кочкор
                айыл өкмөтү</h1>
            </div>
            <div className="header_top_group">
              <div className="header_top_group">
                <FaPhoneAlt /> <p>+996 555 555 555</p>

              </div>
              <div className="header_top_group">
                <IoLocationSharp /> <p>Гараж</p>
              </div>
              <div className="header_top_group">
                {/* <FaEye className="header_top_group_eye" />       */}
              </div>
              <select
                value={i18n.language}
                defaultValue={i18n.language}
                name="" id="">
                <option value="ky">KY</option>
                <option value="ru">RU</option>
              </select>
            </div>
          </div>
          <div className="header_menu">
            {faceData.map((item) => (
              <NavLink
                className="header_menu_item"
                to={item.path}
                activeClassName="active"
                key={item.id}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
