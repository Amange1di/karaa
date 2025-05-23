import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHome } from "../../../app/store/reducers/homePage/homeThunks"
import { NavLink } from "react-router-dom"
import "./homeBanner.scss"

export const HomeBanner = () => {
  const dispatch = useDispatch();
  const homeBanner = useSelector(state => state.homePage.home) || { banner: { text1: '', text2: '', img: '' } };

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);

  return (
    <div className="homeBanner">
      <div className="container">
        <div className="homeBanner_content">
          <h1 className="homeBanner_title">{homeBanner.banner?.text1}</h1>
          <NavLink to={"/about"} className="homeBanner_button"><button>{homeBanner.banner?.text2 || ''}</button></NavLink>
        </div>
        <div className="homeBanner_image">
          <img src={homeBanner.banner?.img} alt="Karaa" />
        </div>
      </div>
    </div>
  )
}
