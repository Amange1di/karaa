import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAds } from "../../../app/store/reducers/homePage/homeThunks"
import "./homeAds.scss"
import { NewsAds } from "../../../features"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const HomeAds = () => {
    const dispatch = useDispatch();
    const ads = useSelector(state => state.homePage.ads) || [];
    const title_ads = useSelector(state => state.homePage.home?.title_ads);

    useEffect(() => {
        dispatch(getAds());
    }, [dispatch]);

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    }

    return (
        <div className="homeAds">
            <div className="container">
                <h1 className="homeAds_title">{title_ads}</h1>
                <Slider {...sliderSettings} className="homeAds_slider">
                    {ads.map(newsItem => (
                        <NewsAds
                            key={newsItem.id}
                            img={Array.isArray(newsItem.img) ? newsItem.img[0] : newsItem.img}
                            data={newsItem.date}
                            title={newsItem.title}
                            id={newsItem.id}
                            description={newsItem.description}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}
