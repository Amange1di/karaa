import "./footer.scss"
import logo from "../../shared/images/gerb.svg"
import { NavLink } from "react-router-dom"
import { FaPhoneAlt, } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHeder } from "../../app/store/reducers/heder/hederThunks";

export const Footer = () => {
    const dispatch = useDispatch();
    const footerData = useSelector(state => state.heder.data) || {};
    useEffect(() => {
        dispatch(getHeder());
    }, [dispatch]);
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_top">
                    <div className="footer_top_logo">
                        <img src={footerData?.img || logo} alt="" />
                        <h1>{footerData?.name_ail || "Кара-Кочкор айыл өкмөтү"}</h1>
                    </div>
                    <div className="footer_top_nav">
                        <h3>{footerData?.nav_title || "Навигация"}</h3>
                        <NavLink className="footer_top_nav_item" to="/" activeClassName="active" key="1">
                            {footerData?.home_title}
                        </NavLink>
                        <NavLink className="footer_top_nav_item" to="/about" activeClassName="active" key="2">
                            {footerData?.about_title}
                        </NavLink>
                        <NavLink className="footer_top_nav_item" to="/news" activeClassName="active" key="3">
                            {footerData?.news_title}
                        </NavLink>
                        <NavLink className="footer_top_nav_item" to="/administration" activeClassName="active" key="4">
                            {footerData?.administration_title}
                        </NavLink>
                        <NavLink className="footer_top_nav_item" to="/projects" activeClassName="active" key="5">
                            {footerData?.project_title}
                        </NavLink>
                        <NavLink className="footer_top_nav_item" to="/gallery" activeClassName="active" key="6">
                            {footerData?.gallery_title}
                        </NavLink>
                        <NavLink className="footer_top_nav_item" to="/media" activeClassName="active" key="7">
                            {footerData?.media_title}
                        </NavLink>
                    </div>
                    <div className="footer_top_group">
                        <h3>{footerData?.contact_title || "Байланыш"}</h3>
                        <div className="footer_top_group_block">
                            <FaPhoneAlt className="footer_top_group_block_icon" /> <p>{footerData?.phone || "+996 555 555 555"}</p>
                        </div>
                        <div className="footer_top_group_block">
                            <IoLocationSharp className="footer_top_group_block_icon" /> <p>{footerData?.address || "Локация"}</p>
                        </div>
                        <div className="footer_top_group_block">
                            <MdOutlineMailOutline className="footer_top_group_block_icon" />
                            <p>{footerData?.email || "info@karakochkor.kg"}</p>
                        </div>
                    </div>
                    <div className="footer_top_group">
                        <h3>{footerData?.social_title}</h3>
                        <div className="footer_top_socials">
                            {footerData?.instagram && (
                                <a href={footerData.instagram.link} target="_blank" rel="noopener noreferrer">
                                    <img src={footerData.instagram.img} alt="Instagram" />
                                </a>
                            )}
                            {footerData?.facebook && (
                                <a href={footerData.facebook.link} target="_blank" rel="noopener noreferrer">
                                    <img src={footerData.facebook.img} alt="Facebook" />
                                </a>
                            )}
                            {footerData?.whatsapp && (
                                <a href={footerData.whatsapp.link} target="_blank" rel="noopener noreferrer">
                                    <img src={footerData.whatsapp.img} alt="WhatsApp" />
                                </a>
                            )}
                            {footerData?.telegram && (
                                <a href={footerData.telegram.link} target="_blank" rel="noopener noreferrer">
                                    <img src={footerData.telegram.img} alt="Telegram" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p>{footerData?.copyright || "© 2025 Кара-Кочкор айыл өкмөтү. Бардык укуктар корголгон."}</p>
                    <p> <a href="#">{footerData?.developer || "Amangeldi"}</a></p>
                </div>
            </div>
        </div>
    )
}
