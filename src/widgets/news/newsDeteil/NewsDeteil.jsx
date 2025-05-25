import "./newsDeteil.scss"
import img from "../../../shared/images/hero.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getNews } from "../../../app/store/reducers/newsPage/newsThunks"

export const NewsDeteil = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { news, loading, error } = useSelector(state => state.newsPage);
    const newsItem = news.find(n => String(n.id) === String(id));
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    useEffect(() => {
        if (!newsItem) {
            dispatch(getNews());
        }
    }, [dispatch, newsItem]);

    if (loading || !newsItem) return <div>Загрузка...</div>;
    if (error) return <div style={{ color: 'red' }}>Ошибка: {error}</div>;

    return (
        <div className="newsDeteil">
            <div className="container">
                <Slider {...sliderSettings} className="newsDeteil_slider">
                    <div className="newsDeteil_img">
                        <img src={img} alt="" />
                    </div>
                    <div className="newsDeteil_img">
                        <img src={img} alt="" />
                    </div>
                    <div className="newsDeteil_img">
                        <img src={img} alt="" />
                    </div>
                </Slider>
                <div className="newsDeteil_text">
                    <h3>{newsItem.date || "-"}</h3>
                    <h2>{newsItem.title || "-"}</h2>
                    <p>{newsItem.description || "-"}</p>
                    {newsItem.content && Array.isArray(newsItem.content) && newsItem.content.map((p, i) => <p key={i}>{p}</p>)}
                </div>
            </div>
        </div>
    )
}
