import "./header.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHeder } from "../../app/store/reducers/heder/hederThunks";
import logo from "../../shared/images/gerb.svg";

export const Header = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const headerData = useSelector((state) => state.heder.data) || {};

  useEffect(() => {
    dispatch(getHeder());
  }, [dispatch]);

  // Обработчик смены языка
  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header_top">
            <div className="header_top_logo">
              <img src={headerData?.img || logo} alt="" />
              <h1>{headerData?.name_ail}</h1>
            </div>
            <div className="header_top_group">
              <div className="header_top_group">
                <FaPhoneAlt /> <p>{headerData?.phone}</p>
              </div>
              <div className="header_top_group">
                <IoLocationSharp /> <p>{headerData?.address}</p>
              </div>
              <div className="header_top_group">
                {/* <FaEye className="header_top_group_eye" />       */}
              </div>
              <select
                value={i18n.language}
                onChange={handleChangeLanguage}
                name="lang"
                id="lang-select"
              >
                <option value="ky">KY</option>
                <option value="ru">RU</option>
              </select>
            </div>
          </div>
          <div className="header_menu">
            <NavLink
              className="header_menu_item"
              to="/"
              activeClassName="active"
              key="1"
            >
              {headerData?.home_title || "Башкы бет"}
            </NavLink>
            <NavLink
              className="header_menu_item"
              to="/about"
              activeClassName="active"
              key="2"
            >
              {headerData?.about_title || "Айыл жөнүндө"}
            </NavLink>
            <NavLink
              className="header_menu_item"
              to="/news"
              activeClassName="active"
              key="3"
            >
              {headerData?.news_title || "Жаңылыктар"}
            </NavLink>
            <NavLink
              className="header_menu_item"
              to="/administration"
              activeClassName="active"
              key="4"
            >
              {headerData?.administration_title || "Администрация"}
            </NavLink>
            <NavLink
              className="header_menu_item"
              to="/project"
              activeClassName="active"
              key="5"
            >
              {headerData?.project_title || "Долбоорлор"}
            </NavLink>
            <NavLink
              className="header_menu_item"
              to="/gallery"
              activeClassName="active"
              key="6"
            >
              {headerData?.gallery_title || "Галерея"}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
