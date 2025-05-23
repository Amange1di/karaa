import "./newsDeteil.scss"
import img from "../../../shared/images/hero.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
export const NewsDeteil = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);
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
        if (id) {
            axios.get(`http://127.0.0.1:8000/news/news/${id}/`)
                .then(res => setNews(res.data))
                .catch(() => setNews(null));
        }
    }, [id]);

    if (!news) return <div>Загрузка...</div>;


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
                    <h3>{news.date || "-"}</h3>
                    <h2>{news.title || "-"}</h2>
                    <p>{news.description || "-"}</p>
                    {news.content && Array.isArray(news.content) && news.content.map((p, i) => <p key={i}>{p}</p>)}
                </div>
            </div>

        </div>
    )
}
