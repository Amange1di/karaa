import "./homeAds.scss"
import news from "../../../shared/images/hero.jpg"
import { NewsAds } from "../../../features"
import Slider from "react-slick" 
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const faceAds = [
    {
        id: 1,
        title: "Ad Title 1",
        description: "description description",
        img: news,
        data: "05.05.2025"
    },
    {
        id: 2,
        title: "Ad Title 2",
        description: "description description",
        img: news,
        data: "06.05.2025"
    },
    {
        id: 3,
        title: "Ad Title 3",
        description: "description description",
        img: news,
        data: "07.05.2025"
    },
    {
        id: 2,
        title: "Ad Title 2",
        description: "description description",
        img: news,
        data: "06.05.2025"
    },
    {
        id: 3,
        title: "Ad Title 3",
        description: "description description",
        img: news,
        data: "07.05.2025"
    },
    {
        id: 2,
        title: "Ad Title 2",
        description: "description description",
        img: news,
        data: "06.05.2025"
    },
    {
        id: 3,
        title: "Ad Title 3",
        description: "description description",
        img: news,
        data: "07.05.2025"
    },
    {
        id: 2,
        title: "Ad Title 2",
        description: "description description",
        img: news,
        data: "06.05.2025"
    },
    {
        id: 3,
        title: "Ad Title 3",
        description: "description description",
        img: news,
        data: "07.05.2025"
    },
    {
        id: 2,
        title: "Ad Title 2",
        description: "description description",
        img: news,
        data: "06.05.2025"
    },
    {
        id: 3,
        title: "Ad Title 3",
        description: "description description",
        img: news,
        data: "07.05.2025"
    },
    {
        id: 2,
        title: "Ad Title 2",
        description: "description description",
        img: news,
        data: "06.05.2025"
    },
    {
        id: 3,
        title: "Ad Title 3",
        description: "description description",
        img: news,
        data: "07.05.2025"
    },
]

export const HomeAds = () => {
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
                <h1 className="homeAds_title">Жарыялар</h1>
                <Slider {...sliderSettings} className="homeAds_slider">
                    {faceAds.map(newsItem => (
                        <NewsAds
                            key={newsItem.id}
                            img={newsItem.img}
                            data={newsItem.data}
                            title={newsItem.title}
                            description={newsItem.description}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}
